//import liraries
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppContext from './Appcontext';

// create a component
const MyComponent = ({navigation}) => {

    obj = useContext(AppContext);
    return (
        <View style={styles.container}>
            <Text>Class C</Text>
            <Text></Text><Text style={{fontSize:20, color:'yellow'}}> value of counter is {obj.counter}</Text>
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
