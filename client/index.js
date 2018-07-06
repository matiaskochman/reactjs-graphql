import React from 'react';
import { render } from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
//import gql from "graphql-tag";
import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/songCreate';

const client = new ApolloClient({});


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="song/new" component={SongCreate}/>
        </Route>
      </Router>
    </ApolloProvider>
  )
};
render(
  <Root />,
  document.querySelector('#root')
);
