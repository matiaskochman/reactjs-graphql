import React from 'react';
import { render } from "react-dom";

import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: `https://w5xlvm3vzz.lp.gql.zone/graphql`
});


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Lyrical</div>
    </ApolloProvider>
  )
  return <div>matias</div>
};
render(
  <Root />,
  document.querySelector('#root')
);
