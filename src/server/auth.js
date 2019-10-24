import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const loginQuery = gql `

mutation signIn($email:String!, $password: String!) {

        signIn(email: $email, password: $password){
            firstName
            lastName
            email
            phoneNumber
            token
            id
        }
    }
  `
export default loginQuery;


