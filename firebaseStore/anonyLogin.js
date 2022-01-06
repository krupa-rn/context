//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

// create a component
const MyComponent = () => {

    const [user, setUser] = useState(null);
   const anonymousLogin = ()=> {
    auth()
    .signInAnonymously()
    .then(() => {
        Alert.alert("Signed In", "Anonymously Signed In")
      console.log('User signed in anonymously');
    })
    .catch(error => {
      if (error.code === 'auth/operation-not-allowed') {
        console.log('Enable anonymous in your firebase console.');
      }
      console.error(error);
    });
   }
   
    useEffect(()=>{
       return auth().onAuthStateChanged((user) =>{
           if(user){
            setUser(user);
            console.log(JSON.stringify(user) + " user ");
           } else { 
               //alert("User not signed in ")
           }
       })
    }, []);

    return (
        <View style={styles.container}>
            {user ? <Text> User Id :{user?.uid} </Text> : 
               <Text onPress={()=> anonymousLogin()} style={styles.text}> Anonymous Login</Text>}
            <Text onPress={()=>{ auth().signOut(); setUser(null); }} style={styles.text}> Log Out </Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    text: {
        fontSize:30,
        color:'pink',
        fontWeight: '400',
        fontStyle:'normal',
        margin:10, borderBottomColor:'pink', borderBottomWidth:1,
    }
});

//make this component available to the app
export default MyComponent;
