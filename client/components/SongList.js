import React, { Component } from 'react';
import { ApolloProvider, Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { Link } from 'react-router';
import fetchSongsQuery from '../queries/fetchSongsQuery';
import '../style/style.css';

const DELETE_SONG = gql`
  mutation deleteSong($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

class SongList extends Component {

  onDelete(event, deleteSong,id){
    event.preventDefault();
    deleteSong({ variables: { id } })
      .then(() => console.log('song deleted.'))
      .catch(e => console.error(e));
  }

  renderSongs(data){
    return data.songs.map((song, index) => {
      return(

        <Mutation
          mutation={DELETE_SONG}
          refetchQueries={[{
            query: fetchSongsQuery
          }]}
        >
          {deleteSong => (
            <li key={song.id} className="collection-item">
              {song.title}
              <i
                className="material-icons"
                onClick={(e) => {
                  console.log('onclick')
                  this.onDelete(e,deleteSong,song.id)}}
              >
                delete
              </i>
            </li>

          )}
        </Mutation>
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