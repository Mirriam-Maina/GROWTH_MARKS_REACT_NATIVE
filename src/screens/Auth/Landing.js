import React from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';
import login from '../../server/auth';


const LandingPage = (props) => {
return(
    <View style={styles.View}>
        <Text style={styles.Text}>GROWTH MARKS</Text>
        <Text style={styles.caption}>Share your growth mark</Text>
        <View style={styles.Buttons}>
        <TouchableOpacity
          style={styles.loginButton}
          underlayColor='#fff'>
          <Text style={styles.loginText} onPress={() => {props.navigation.navigate('Login')}}>Sign in to your account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupButton}
          underlayColor='#fff'>
          <Text style={styles.signupText} onPress={() => {props.navigation.navigate('Signup')}}>Sign up for Growth Marks</Text>
        </TouchableOpacity>
        </View>

    </View>
)
}

export default LandingPage;