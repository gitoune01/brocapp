import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AuthHeader from '../../components/AuthHeader';
import Button from '../../components/Button';
import Input from '../../components/Input';
import CheckBox from '../../components/Checkbox';
import Separator from '../../components/Seperator';
import GoogleLogin from '../../components/GoogleLogin';

const Signin = () => {
  const [checked, setChecked] = useState(false);

  const onSignUp = () => {
    console.log('onSignUp')
  }

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign In" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="********" />
      <Button style={styles.button} title="Sign In"/>
    
      <Separator text="Or sign in with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Don't have an account? <Text onPress={onSignUp}style={styles.footerLink}> Sign Up</Text>
      </Text>
    </ScrollView>
  );
};

export default Signin;
