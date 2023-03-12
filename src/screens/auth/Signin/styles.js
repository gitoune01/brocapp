import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  agreeCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    color: colors.blue,
    marginHorizontal: 13,
  },

  term: {
    fontWeight: 'bold',
  },
  privacy: {
    fontWeight: 'bold',
  },
  button:{
    marginVertical:20
  },
  footerText:{
    color: colors.blue,
    marginBottom:5,
    textAlign: 'center'
  },
  footerLink:{
    fontWeight: 'bold',
  }
});
