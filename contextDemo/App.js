//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//most imp import 
import { AppProvider } from './Appcontext';
import AppContext from './Appcontext';
import Home from './Home';
import classA from './classA';
import classB from './classB';
import classC from './classC';
import classD from './stack2/classD';
import classE from './stack2/classE';
import classF from './stack2/classF';
// create a component
const MyComponent = ({navigation}) => {
   const Stack = createNativeStackNavigator();
   let stack1 = true;

   const Mystack1 =()=>{
       return(
       
          <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} options={{title:'Welcome'}}/>
            <Stack.Screen name="Class A" component={classA}></Stack.Screen>
            <Stack.Screen name="Class B" component={classB}></Stack.Screen>
            <Stack.Screen name="Class C" component={classC}></Stack.Screen>
          </Stack.Navigator>
        
       );
   }

   const Mystack2=()=>{
       return(
    
        <Stack.Navigator>
        <Stack.Screen name="Class D" component={classD}></Stack.Screen>
        <Stack.Screen name="Class E" component={classE}></Stack.Screen>
        <Stack.Screen name="Class F" component={classF}></Stack.Screen>
        </Stack.Navigator>
   
       );
   }

    return (
        //applying two navigator stacks from one screen 
        <AppProvider>
        <NavigationContainer>
    
         <Mystack1/>
         
        </NavigationContainer>
        </AppProvider>
        //not happening for now 
        // <View style={styles.container}>
        //   <Button title="launch stack 1" onPress={()=>Mystack1() }/>
        // </View>
       
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
});

//make this component available to the app
export default MyComponent;
