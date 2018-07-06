import React from 'react';
import { render } from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
//import gql from "graphql-tag";
import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/songCreate';
import SongDetail from './components/songDetail';

const client = new ApolloClient({});


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
