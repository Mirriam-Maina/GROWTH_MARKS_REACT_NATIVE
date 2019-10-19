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
    if ( loading ) return { loading }
    if(error) return { error }
    return data;
};

