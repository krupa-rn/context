//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import CounterApp from './CounterApp';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState ={ counter:0 }
const reducer =(state= initialState, action)=>{

   // can use switch statement too.

    if(action.type === 'INCREASE_COUNTER'){
        //do something related to something , update state or store 
        return {counter: state.counter +1 }
    }
    else if(action.type === 'DECREASE_COUNTER'){
      return {counter: state.counter -1}
    }
    else {
        console.log('error');
    }
    return state 
}

//store must have reducer function 
const Store = createStore(reducer);



const MyComponent = () => {
    return(
       <Provider store={Store}>
         <CounterApp/>
       </Provider>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});

export default MyComponent;
