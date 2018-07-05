import React from 'react';
import { render } from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
//import gql from "graphql-tag";

import SongList from './components/SongList';

const client = new ApolloClient({});


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <SongList />
    </ApolloProvider>
  )
};
render(
  <Root />,
  document.querySelector('#root')
);
