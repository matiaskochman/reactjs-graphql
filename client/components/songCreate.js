import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_SONG = gql`
  mutation addSong($title: String!) {
    addSong(title: $title) {
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
    addSong({ variables: { title: this.state.title } });
    this.setState({title:''});

  }
  render(){

    return(
      <div>
      <h3>Create a new song</h3>
      <Mutation mutation={ADD_SONG}>
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