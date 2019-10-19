import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    headers: {
        authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiczZoamt5QGZmZ21haWwuY29tIiwiaWQiOjF9LCJpYXQiOjE1NzE0MjA5ODQsImV4cCI6MTU3MTUwNzM4NH0.plXFao8KdBRJ_znGWO389D0rnQOl0_3cMOUqi3R2XF4"
    },
    uri: 'http://192.168.1.78:4000/',
  })

export default client;