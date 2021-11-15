//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet , Button} from 'react-native';

// create a component
const MyComponent = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Class D</Text>
            <Text></Text>
            <Button title="Go to E" onPress={()=> navigation.navigate('Class E')}> </Button>
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
