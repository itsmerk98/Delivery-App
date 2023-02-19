import React from 'react';
// import {Text, View} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import { LoginScreen } from './src/screens/Login.screen';
import RegisterScreen from './src/screens/Regisre.screen';
// import { theme } from './src/styles/app.style';

const App = () => {

  return (
    <PaperProvider>
        <LoginScreen />
        {/* <RegisterScreen /> */}
    </PaperProvider>
  );
};

export default App;
