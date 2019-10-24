import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
    View: {
        height: '100%',
        backgroundColor: 'black'
    },
    Text: {
        fontSize: 30,
        marginTop: '30%',
        alignItems: 'center',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff'
    },
    Buttons: {
        paddingTop: 50,
        paddingLeft: 50,
        paddingRight: 50,
        alignItems: 'center',
    },
    loginButton:{
        marginRight:40,
        marginLeft:40,
        marginTop:10,
        alignItems: 'center',
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#3399ff',
        borderRadius:10,
        borderWidth: 1,
        width: '70%'
      },
      signupText:{
        color:'#3399ff',
        textAlign:'center',
        paddingLeft : 10,
        paddingRight : 10
    },
    signupButton:{
        marginRight:40,
        marginLeft:40,
       marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'black',
        borderRadius:10,
        borderWidth: 1,
      },
      signupText:{
          color:'#3399ff',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10
      },
      caption: {
          color: '#fff',
          textAlign: 'center',
          marginTop: 10
      },
      form: {
        backgroundColor: 'black',
        height: '100%',
        marginTop: 20
    },
    label: {
        color: '#3399ff',
        fontWeight: 'bold',
        fontSize: 20,
        fontStyle: 'italic'
    },
    inputField: {
       margin: 10,
       height: 40, 
       borderBottomColor: 'gray',
       borderWidth: 1,
       color: '#fff'
    },
    createButton: {
       marginRight:40,
       marginLeft:40,
       marginTop:10,
       paddingTop:10,
       paddingBottom:10,
       backgroundColor:'#3399ff',
       borderRadius:10,
       borderWidth: 1,
       textAlign: 'center'
    },
    createText:{
       color:'#fff',
       textAlign:'center',
       paddingLeft : 10,
       paddingRight : 10
   },
})