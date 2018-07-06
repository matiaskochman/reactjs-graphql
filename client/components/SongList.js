import React, { Component } from 'react';
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
//import ApolloClient, { gql } from "apollo-boost";
//const client = new ApolloClient({});

const GET_SONGLIST = gql`
{
  songs{
    id
    title
  }
}
`;

class SongList extends Component {

  renderSongs(data){
    return data.songs.map((song, index) => {
      return(
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      )
    })
  }

  render(){
    return(
      <Query query={GET_SONGLIST}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error</div>;
        console.log(data)
        return (
          <ul className="collection">
            {this.renderSongs(data)}
          </ul>
        )
      }}
    </Query>    )
  }
}

export default SongList;