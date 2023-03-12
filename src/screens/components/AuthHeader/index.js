import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import { styles } from './styles';

const AuthHeader = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress}>
        <Image style={styles.image} source={require('../../../assets/prev.png')} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default AuthHeader;
