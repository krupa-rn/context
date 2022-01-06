//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import auth from '@react-native-firebase/auth';         //mobile login 

// create a component
function PhoneSignIn() {
    // If null, no SMS has been sent
    const [confirm, setConfirm] = useState(null);
  
    const [code, setCode] = useState('');
  
    // Handle the button press
    async function signInWithPhoneNumber(phoneNumber) {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    }
  
    async function confirmCode() {
      try {
        await confirm.confirm(code);
      } catch (error) {
        console.log('Invalid code.');
      }
    }
  
    if (!confirm) {
      return (
        <Button
          title="Phone Number Sign In"
          onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
        />
      );
    }
  
  }
//make this component available to the app
export default PhoneSignIn;
