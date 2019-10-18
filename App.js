import React from 'react';
import Homepage from './src/screens/homepage/home';
import client from './src/server/config';
import { ApolloProvider } from '@apollo/react-hooks';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <ApolloProvider client={client}>
          <Homepage />
    </ApolloProvider>
  );
}
