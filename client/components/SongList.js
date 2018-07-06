import React, { Component } from 'react';
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from 'react-router';
import fetchSongsQuery from '../queries/fetchSongsQuery';



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
      <Query query={fetchSongsQuery}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error</div>;
        console.log(data)
        return (
          <div>
            <ul className="collection">
              {this.renderSongs(data)}
            </ul>
            <Link
              to="songs/new"
              className="btn-floating btn-large red right"
            >
              <i className="material-icons">add</i>
            </Link>
          </div>
        )
      }}
    </Query>    )
  }
}

export default SongList;