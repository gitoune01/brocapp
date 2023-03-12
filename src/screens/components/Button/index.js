import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from './styles';

const Button = ({title,onPress, style}) => {
    console.log('From inside button')


  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={[styles.container,style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
