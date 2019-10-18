import React from 'react';
import styles from './styles';
import { View, Text} from 'react-native';

const Header = () => {

   return( 
       <View style={styles.header}>
       <Text style={styles.headerText}>GROWTH MARKS</Text>
       </View> 
       );
}

export default Header;

