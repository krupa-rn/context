//A functional comp[onent ] with redux 

import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';

const CounterAppFun =()=>{
     
    const [count, setCount] = useState(0);
    const counter = useSelector(state=> state.counter)
    return(
        <SafeAreaView style={styles.container}>
        <Text style={{fontSize:20, marginBottom:10, }}> Redux Counter </Text>
        
        <View style={styles.wrapperView}>
           <TouchableOpacity onPress={()=> this.props.increase()}>  
               <Text style={{fontSize:20}}>Increase</Text>
           </TouchableOpacity>
             
           <Text style={styles.reduxCounter}> {this.props.counter} </Text>

           <TouchableOpacity onPress={()=> this.props.decrease()}>
               <Text style={{fontSize:20}}> Decrease </Text>
           </TouchableOpacity>
       </View>
    </SafeAreaView>
    );
}

export default CounterAppFun;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    reduxCounter: {
        fontStyle:'italic', fontSize:20, borderWidth:1, padding:5,
        fontWeight:'bold', color:'violet'
    },
    wrapperView: {
        flexDirection:'row', width:300, justifyContent:'space-around', 
        alignItems:'center', marginTop:10
    }
}); 