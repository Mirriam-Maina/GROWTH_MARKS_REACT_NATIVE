import React from 'react';
import getArticles from '../../server/articles';
import { View, Text, StyleSheet, Image, Button } from 'react-native';


const Card = () => {
    const articles = getArticles();
    return(
        <View style={styles.card}>
            <Image  style={styles.image} source={require('../../../assets/img.png')} />
            <Text style={styles.title}>This is an article Title Right here.</Text>
            <View  style={styles.button} >
            <Button title="READ MORE" color='#2f89fc'/>
            </View>
        </View>
    );

}


const styles = StyleSheet.create({
card: {
    borderWidth: 0.2,
    borderColor: 'grey',
    height: 250,
    margin: 10,
    marginBottom: 10,
    shadowColor: 'grey',
    borderRadius: 20
},
image: {
    margin: 5,
    height: '60%',
    borderRadius: 20,
    width: '98%'
},
title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
},
button: {
    marginTop: 20,
    height: 100,
    marginLeft: 10,
    marginRight: 10
}


})
export default Card;