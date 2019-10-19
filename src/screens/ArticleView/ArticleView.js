import React from 'react';
import styles from './styles';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';


const ArticleView = (props) => {
const { navigation: { state: { params: { title, body }}}} = props;
return(
        <View>
            <ScrollView>
            <Text style={styles.title}> {title}</Text>
            <Image  style={styles.image} source={require('../../../assets/img.png')} />
            <Text style={styles.text}> {body}</Text>
            </ScrollView>
        </View>
    );
};

export default ArticleView;