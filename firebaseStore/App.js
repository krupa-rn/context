import React from 'react';
import { StatusBar } from 'react-native';
import UploadScreen from './uploadScreen';
import UnknownLogin from './anonyLogin';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <UploadScreen/>
      {/* <UnknownLogin /> */}
    </>
  );
};
export default App;