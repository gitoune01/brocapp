import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';

const CheckBox = ({checked, setChecked}) => {

  console.log('from checkbox')
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setChecked(!checked)}
      style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require('../../../assets/check.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(CheckBox);
