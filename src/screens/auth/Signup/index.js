import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import AuthHeader from '../../components/AuthHeader';
import Button from '../../components/Button';
import Input from '../../components/Input';
import CheckBox from '../../components/Checkbox';
import Separator from '../../components/Seperator';
import GoogleLogin from '../../components/GoogleLogin';

const Signup = () => {
  const [checked, setChecked] = useState(false);

  const onSignIn = () => {
    console.log('onSignIn')
  }

  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign Up" />
      <Input label="Name" placeholder="John Doe" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="********" />
      <View style={styles.agreeCont}>
        <CheckBox checked={checked} setChecked={setChecked} />
        <Text style={styles.agreeText}>
          I agree with<Text style={styles.term}>Terms</Text> &{' '}
          <Text style={styles.privacy}>privacy</Text>
        </Text>
      </View>
      <Button style={styles.button} title="Sign Up">
        Sign Up
      </Button>
      <Separator text="Or sign up with" />
      <GoogleLogin />
      <Text style={styles.footerText}>
        Already have an account?
        <Text onPress={onSignIn}style={styles.footerLink}> Sign In</Text>
      </Text>
    </ScrollView>
  );
};

export default Signup;
