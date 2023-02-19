import React from 'react';
import {Card, TextInput, Button} from 'react-native-paper';
import {SafeAreaView, View} from 'react-native';
import {Style} from '../styles/login.style';
import {Formik} from 'formik';

export const LoginScreen = () => {
  return (
    <SafeAreaView style={Style.container}>
      <View style={Style.view}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <Card>
              <Card.Title title="Delivery App." titleStyle={Style.headding} />
              <Card.Content>
                <TextInput
                  label="Email:"
                  // value={values.email}
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <TextInput
                  label="Password:"
                  // value={values.password}
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                <Button uppercase={false}>Forget Password/Email</Button>
                <Button
                  icon="login"
                  mode="contained-tonal"
                  style={Style.button} onPress={handleSubmit}>
                  Login
                </Button>
                <Button icon="register" mode="elevated">
                  Register
                </Button>
              </Card.Content>
            </Card>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

// export default LoginScreen
