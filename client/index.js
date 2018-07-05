import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import ApolloProvider from  'react-apollo';

const client = new ApolloClient({});

/*
const Root = () => {
  return (
    <ApolloProvider client={client}>
      <div>Lyrical</div>
    </ApolloProvider>
  )
  return <div>matias</div>
};
 */
/*
ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
*/
export default class Root extends Component {
  render() {
      return (
        <ApolloProvider client={client}>
          <div>Lyrical</div>
          <div>Hola pianola</div>
        </ApolloProvider>
      );
  }
}