import React from 'react';
import { StatusBar } from 'react-native';
import UploadScreen from './uploadScreen';
import UnknownLogin from './anonyLogin';
import PhoneScreen from './PhoneSignIn';
import OTPScreen from './OTPScreen';
import SuccessScreen from './SuccessScreen';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const App = () => {
  const Stack = createStackNavigator();
  return (
    // <>
    //   <StatusBar barStyle="dark-content" />
    //   <UploadScreen/>
    //   {/* <UnknownLogin /> */}
    // </>
    <NavigationContainer >
    <Stack.Navigator>
       <Stack.Screen name='Phone Number' component={PhoneScreen}/>
       <Stack.Screen name='OTP Screen' component={OTPScreen}/>
       <Stack.Screen name='successScreen' component={SuccessScreen} options={{title : ''}}/>
       
    </Stack.Navigator>
 </NavigationContainer>

  );
};
export default App;