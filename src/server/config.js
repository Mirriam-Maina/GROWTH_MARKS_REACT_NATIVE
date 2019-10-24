import ApolloClient from 'apollo-boost';
import { AsyncStorage } from 'react-native';

const _token = async() => {
 const token = await AsyncStorage.getItem('token');
 if(!token){
   return '';
 }
 return token;
}
 

const client = async() => new ApolloClient({
    headers: {
        authorization: await _token()
    },
    uri: 'http://172.16.0.199:4000/',
  })

export default client;