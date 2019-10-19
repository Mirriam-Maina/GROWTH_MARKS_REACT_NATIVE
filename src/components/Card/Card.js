import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import styles from './styles';


const Card = (props) => {
    const { title, id, body } = props;
    return(
            <View style={styles.card} key={id}>
            <Image  style={styles.image} source={require('../../../assets/img.png')} />
            <Text style={styles.title}>{title}</Text>
            <View  style={styles.button} >
            <Button title="READ MORE" color='#2f89fc' onPress={()=>{props.navigate('ArticleView', {title, body})}}/>
            </View>
        </View>
    );
}

export default Card;