import React from 'react';
import { TextInput, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import styles from './styles';

const Signup = () => {

return(
    <View style={styles.form}>
        <TextInput style={styles.inputField} placeholder="First name"/>
        <TextInput style={styles.inputField} placeholder="Last name" />
        <TextInput style={styles.inputField} placeholder="Username"/>
        <TextInput style={styles.inputField} placeholder="E-mail address"/>
        <TextInput style={styles.inputField} secureTextEntry={true} placeholder="Password"/>
        <TextInput style={styles.inputField} secureTextEntry={true} placeholder="Repeat Password"/>
        <TouchableOpacity  style={styles.createButton}
          underlayColor='#fff'>
              <Text style={styles.createText}>Sign Up</Text>
          </TouchableOpacity>
    </View>
);

};

export default Signup;