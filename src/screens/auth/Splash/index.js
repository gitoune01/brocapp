import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './styles';
import React from 'react';
import Button from '../../components/Button';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.imageStyle}
        source={require('../../../assets/splash.png')}
      />
      <View style={styles.contTitle}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All You Need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>
      <Button title="Signup" />
      <Pressable hitSlop={20}>
        <Text style={styles.footerText}>Sign In</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
