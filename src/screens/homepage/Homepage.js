import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import { View, FlatList, Text } from 'react-native';
import  getArticles from '../../server/articles';

const Homepage = (props) => {
    const articles = getArticles();
    if(articles.articles) {
        return (
            <View>
                <FlatList  
                    data={articles.articles}
                    renderItem = {(itemData)=> <Card title={itemData.item.title} 
                    id={itemData.item.id}
                     body={itemData.item.body} 
                     onPress= {() => {props.navigation.navigate('ArticleView',{title: itemData.item.title, body: itemData.item.body})} }
                     navigate={props.navigation.navigate}
                     /> } 
                    keyExtractor={(item, index)=>item.id}
                />
            </View>
                 )
    }
    if(articles.loading) {

        return <Text>Loading...</Text>
    }
    return <Text>Error.....</Text>
}

export default Homepage;