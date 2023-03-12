import {View, Text, TextInput, Pressable, Image} from 'react-native';
import React, { useState } from 'react';
import {styles} from './styles'

const Input = ({label, placeholder, isPassword}) => {
   const [isVisible ,setIsVisible] = useState(false);


  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput secureTextEntry={isPassword && !isVisible} placeholder={placeholder} style={styles.input} />
        {isPassword ? (
        <Pressable onPress={()=> setIsVisible(prev=> !prev)}>
           <Image style={styles.eye} source={isVisible ? require('../../../assets/Exclude.png') : require('../../../assets/eye.png') }  />
        </Pressable>
        ):null}
      </View>
    </View>
  );
};

export default Input;
