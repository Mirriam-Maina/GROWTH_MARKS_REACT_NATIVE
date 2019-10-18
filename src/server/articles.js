import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Text } from 'react-native';


const GETALLARTICLES = gql`
{
    articles{
        title
        body
        id
    }
}
`;

export default  getArticles = () => {
    const { loading, error, data} = useQuery(GETALLARTICLES);
    if ( loading ) return <Text>loading...</Text>
    if(error) return <Text>An error occured...</Text>
    console.log('mirriam',data)
    return data;
};

