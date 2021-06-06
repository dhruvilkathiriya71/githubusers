import { StyleSheet } from 'react-native';

import { colors } from '../helper/colors';
import { fontSize, hp } from '../helper/constants';

export const style = StyleSheet.create({
  labelStyle: {
    fontSize: fontSize(15),
    fontWeight: 'bold',
    textTransform: 'none',
    paddingVertical: hp(0.5),
  },
  indicatorStyle: {
    height: 3,
    backgroundColor: colors.primaryColor,
  },
});
