//import liraries
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';
//import { useNavigation } from '@react-navigation/';
import AppContext from './Appcontext';

const MyComponent = ({navigation}) => {
    
    const obj = useContext(AppContext);
   console.log(obj.counter);

    const [text, setText] = useState(0);
    return (
        <View style={styles.container}>
              
            {/* <Text> value of counter is {counter}</Text> */}
            <TextInput style={{borderWidth:0.9, borderColor:'red',width:'85%', height :'4%', padding:5, margin:5, }}
            //value={'0'}
            onChangeText={(val)=> setText(val)}
            keyboardType='number-pad' />
            
            <Button title="Update value in Context" 
              onPress={()=> {obj.setCounter(text)} }/>
            <Button title="Go to stack 1" onPress={() => navigation.navigate('Class A')}/>
        </View>
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
