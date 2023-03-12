import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,

  },
  image: {
    width: 28,
    height: 28,
  },
  title: {
    color: colors.blue,
    fontSize: 26,
    fontWeight: '600',
    paddingHorizontal: 16,
  },
});
