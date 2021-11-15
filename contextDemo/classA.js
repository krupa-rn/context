//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AppContext from './Appcontext';

// create a component
const MyComponent = ({navigation}) => {
    const  obj  = useContext(AppContext); 

    return (
        <View style={styles.container}>
             <Text>Class A</Text>
            <Text style={{fontSize:20, color:'yellow'}}> value of counter is {obj.counter}</Text>

            <Button title="go to class B" onPress={()=>navigation.navigate('Class B')}></Button>
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
});

//make this component available to the app
export default MyComponent;
