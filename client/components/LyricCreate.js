import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link, hashHistory } from 'react-router';
import fetchSongQuery from '../queries/fetchSongQuery'

const LYRIC_CREATE = gql`
  mutation AddLyricToSong($content:String, $songId:ID){
    addLyricToSong(content:$content, songId:$songId){
      id
      lyrics{
        id
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

  onSubmit(e, addLyricToSong, songId){
    e.preventDefault();
    console.log(this.props);
    addLyricToSong({ variables: { content: this.state.content, songId} })
      .then((res) => {
        return res;
      }). catch (e => {
          console.error('error in mutation')
        }
      );
    this.setState({content:''});
  }

  updateCache(cache, { data: { addLyricToSong } }){

    const id = addLyricToSong.id;
    const { song } = cache.readQuery({ query: fetchSongQuery, variables: { id } });
    cache.writeQuery({
      query: fetchSongQuery,
      data: {
        song: song.lyrics.concat(addLyricToSong)
      }
    })
  }

  render(){
    console.log('render lyric create');
    const { songId } = this.props;
    return(
      <Mutation
        mutation={LYRIC_CREATE}        
      >
        {addLyricToSong => (
          <form onSubmit={e => this.onSubmit(e, addLyricToSong, songId)}>
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