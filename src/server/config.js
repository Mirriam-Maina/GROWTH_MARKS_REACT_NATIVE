import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    headers: {
        authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiczZoamt5QGZmZ21haWwuY29tIiwiaWQiOjF9LCJpYXQiOjE1NzEzOTk4MDgsImV4cCI6MTU3MTQwMzQwOH0.Fy8r-8HhzLGdFlc1S4dB6EfYeMOZdpLqxiXARQAJh0Q"
    },
    uri: 'http://172.16.0.199:4000/',
  })

export default client;