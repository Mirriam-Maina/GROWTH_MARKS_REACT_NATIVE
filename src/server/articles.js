import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


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
    const { loading, error, data, startPolling} = useQuery(GETALLARTICLES);
    startPolling(3000);
    if ( loading ) return { loading }
    if(error) return { error };
    return data;
};

