import React from 'react';
import { render } from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from 'react-router';


import { InMemoryCache, defaultDataIdFromObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';

//import ApolloClient from "apollo-boost";
//import { InMemoryCache } from 'apollo-cache-inmemory';


import { ApolloProvider, Query } from "react-apollo";
//import gql from "graphql-tag";
import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';


const cache = new InMemoryCache({
  dataIdFromObject: object => object.id
});

const client = new ApolloClient({
  link: new HttpLink(),
  cache
});

//dataIdFromObject conf para evitar un refetch y que apollo lo haga automatico.
//cache


const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
          <Route path="songs/new" component={SongCreate}/>
          <Route path="songs/:id" component={SongDetail}/>
        </Route>
      </Router>
    </ApolloProvider>
  )
};
render(
  <Root />,
  document.querySelector('#root')
);
