import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link, hashHistory } from 'react-router';


const LYRIC_CREATE = gql`
  mutation AddLyricToSong($content:String, $songId:ID){
    addLyricToSong(content:$content, songId:$songId){
      id
      lyrics{
        content
      }
    }
  }
`;

class LyricCreate extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: ''
    }
  }

  onSubmit(e,addLyricToSong){
    e.preventDefault();
    console.log(this.props);
    addLyricToSong({ variables: { content: this.state.content, songId:this.props.songId} })
      .then(() => {
        //hashHistory.push('/');
      }). catch (e => console.error('error in mutation'));
    this.setState({content:''});
  }

  render(){
    console.log('render lyric create');
    return(
      <Mutation
        mutation={LYRIC_CREATE}
      >
        {addLyricToSong => (
          <form onSubmit={e => this.onSubmit(e,addLyricToSong)}>
            <label>Add Lyric:</label>
            <input
              onChange={event => this.setState({content: event.target.value})}
              value={this.state.content}
            />
          </form>
        )}
      </Mutation>
    )    
  }
}
export default LyricCreate;