import React, {useState} from 'react';
import { TextInput, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import styles from './styles';
import loginQuery from '../../server/auth';
import {AsyncStorage} from 'react-native';
import { useMutation } from '@apollo/react-hooks';

const Login = () => {
    const initialState = {
        email: '',
        password: ''
    }

    const [state, setstate] = useState(initialState);
    const [ signin, {data}] = useMutation(loginQuery)

    console.log('------------------------------>',data)
    const loginHandler = async() => {
        data && await AsyncStorage.setItem('token', data.signIn.token);
    }

    return(
        <View style={styles.form}>
            <TextInput 
                style={styles.inputField} 
                placeholder="E-mail or username"
                onChangeText={(text) => setstate({...state, email: text})}
            />
            <TextInput 
                style={styles.inputField} 
                secureTextEntry={true} 
                placeholder="Password"
                onChangeText={(text) => setstate({...state, password: text})}
            />
            <TouchableOpacity  
                style={styles.createButton}
                underlayColor='#fff'
                onPress={() => signin({variables: state})}
            >
                < Text style={styles.createText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );

};

export default Login;