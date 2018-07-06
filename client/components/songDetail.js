import React, { Component } from 'react';
import gql from 'graphql-tag';

const FETCH_SONG = gql`
query SongQuery($id: ID!){
  song(id: $id){
    id
    title
  }
}
`;


class SongDetail extends Component {
  render(){
    return(
      <div>Song Detail
      </div>
    )
  }
}
export default SongDetail;