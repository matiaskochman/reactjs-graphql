import React, { Component } from 'react';
import { ApolloProvider, Query, Mutation } from "react-apollo";
import gql from 'graphql-tag';
import { Link, hashHistory } from 'react-router';
import LyricCreate from './LyricCreate';
import LyricList from './LyricList';
import fetchSongQuery from '../queries/fetchSongQuery';

const FETCH_SONG = gql`
query SongQuery($id: ID!){
  song(id: $id){
    id
    title
    lyrics {
      id
      content
    }
  }
}
`;


class SongDetail extends Component {
  render(){
    console.log('render songDetail');
    const { id } = this.props.params;
    return(
      <Query query={fetchSongQuery} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error</div>;
        if (!data.song.title) {
          console.log(data);
        }
        return (
          <div>
          <Link
            to="/"
          >
            Back
          </Link>
            <h3>{data.song.title}</h3>
            <LyricList lyricList={data.song.lyrics}/>
            {
              /*
              songId={this.props.params.id} lo paso por parametro porque react-router
              solo pasa el parametro de la ruta al primer componente.
               */
            }
            <LyricCreate songId={this.props.params.id}/>
          </div>
        )
  
        }
      }
      </Query>
    )
  }
}

export default SongDetail;