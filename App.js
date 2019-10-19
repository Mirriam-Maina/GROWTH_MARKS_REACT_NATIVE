import React from 'react';
import AppContainer from './src/screens/index';
import client from './src/server/config';
import { ApolloProvider } from '@apollo/react-hooks';
import ArticleView from './src/screens/ArticleView/ArticleView';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <ApolloProvider client={client}>
          <AppContainer />
    </ApolloProvider>
  );
}
