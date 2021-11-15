//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const MyComponent = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Class B</Text>
            <Text></Text>
            <Button title="go to class C" onPress={()=>navigation.navigate('Class C')}></Button>
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
