import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Appbar, Button, Card, TextInput} from 'react-native-paper';
import {Style} from '../styles/login.style';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.view}>
        <Card>
          <Appbar>
            <Appbar.BackAction />
            <Appbar.Content title="Register" />
          </Appbar>

          <TextInput label="Name" />
          <TextInput label="Email" keyboardType="email-address" />
          <TextInput label={'Phone number'} keyboardType="phone-pad" />
          <TextInput label="Password" secureTextEntry={true} />
          <TextInput label="confirm Password" secureTextEntry={true} />
          <Button mode="contained-tonal" style={Style.button}>
            Register
          </Button>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
