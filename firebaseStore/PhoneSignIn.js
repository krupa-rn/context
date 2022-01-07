import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TextInput } from 'react-native';

export default PhoneScreen = ({ navigation }) => {
    const [phoneNumber, addPhoneNumber] = useState('+91');

    const GetOTP = () => {
        if(phoneNumber && phoneNumber.length > 9){
        navigation.navigate('OTP Screen', {phoneNumber});
        }
        else
        alert("Please enter 10 digit phone number");
    }
   
    return (
        <View style={styles.container}>
            <TextInput
            value={phoneNumber}
                style={styles.phoneInput}
                placeholder="+91 1234567890"
                onChangeText={(text) => addPhoneNumber(text)}
            />
            <Pressable onPress={GetOTP}
                style={({ pressed }) => ({ ...styles.btnContainer, backgroundColor: pressed ? 'cyan' : 'blue' })}>
                <Text style={styles.btnText}>
                    Get OTP!
                </Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnContainer: {
        padding: 20,
        borderRadius: 10,
        marginTop: 30,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    text: {
        color: 'black',
        fontSize: 20,
    },
    phoneInput: {
         height: 50, width: 300, paddingLeft: 20, backgroundColor: 'azure', fontSize: 20,
         borderColor:'red', borderWidth:0.8, borderRadius:5
    }
});