import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import { View, ScrollView } from 'react-native';
import styles from './styles';


const Homepage = () => {

   return( 
   <View>
       <Header />
      <ScrollView>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </ScrollView>

   </View> );
}

export default Homepage;