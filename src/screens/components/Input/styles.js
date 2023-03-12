import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    marginBottom:20
  },
  label: {
    marginBottom: 8,
    color: colors.blue,
    fontSize: 16,
    
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection:'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: 14,
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
eye:{
  width:24,
  height:24,
  marginHorizontal:16
}
});
