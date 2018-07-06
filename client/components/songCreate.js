import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link, hashHistory } from 'react-router';

const ADD_SONG = gql`
  mutation addSong($title: String!) {
    addSong(title: $title) {
      id
      title
    }
  }
`;
const GET_SONGLIST = gql`
{
  songs{
    id
    title
  }
}
`;
class SongCreate extends Component{

  constructor(props){
    super(props);
    this.state = {
      title: ''
    }
  }

  onSubmit(e,addSong){
    e.preventDefault();
    addSong({ variables: { title: this.state.title } })
      .then(() => {
        console.log('mutation done!');
        console.log('hashHistory: ', hashHistory);
        hashHistory.push('/');
      }). catch (e => console.error('error in mutation'));
    this.setState({title:''});

  }
  render(){

    return(
      <div>
        <Link
          to="/"
        >
          Back
        </Link>

        <h3>Create a new song</h3>
        <Mutation
          mutation={ADD_SONG}
          update={(cache, { data: { addSong } }) => {
            const { songs } = cache.readQuery({ query: GET_SONGLIST });
            console.log('songs: ',songs)
            cache.writeQuery({
              query: GET_SONGLIST,
              data: { songs: songs.concat([addSong]) }
            });
          }}
        >
          {addSong => (
            <form onSubmit={e => this.onSubmit(e,addSong)}>
              <label>Title:</label>
              <input
                onChange={event => this.setState({title: event.target.value})}
                value={this.state.title}
              />
            </form>
          )}
        </Mutation>
      </div>
    )
  }
}
export default SongCreate;