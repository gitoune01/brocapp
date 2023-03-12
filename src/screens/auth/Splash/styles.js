import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 24,
    justifyContent: 'center',
    alignItems:'center',
    // borderWidth: 1,
    flex:1
  },

  imageStyle: {
    width: '100%',
    height: 200,
  },

  contTitle: {
    marginVertical:54


  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  innerTitle: {
    color: colors.orange,
    textDecorationLine: 'underline',
  },
  footerText: {
    color: colors.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  },
});
