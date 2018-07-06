import React, { Component } from 'react';
import { ApolloProvider, Query, Mutation } from "react-apollo";
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
    const { id } = this.props.params;
    return(
      <Query query={FETCH_SONG} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error</div>;
        console.log(data)
        return (
          <div>Song Detail
          </div>
        )
  
        }
      }
      </Query>
    )
  }
}

export default SongDetail;