import { StyleSheet } from 'react-native';

import { colors } from '../../helper/colors';
import { fontSize, wp } from '../../helper/constants'

export const style = StyleSheet.create({
  textInput: {
    paddingVertical: wp(2),
    paddingHorizontal: wp(5),
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: wp(2),
    fontSize: fontSize(14),
    color: colors.blackColor,
    padding: 0,
    width: wp(90),
    marginTop: wp(5),
    alignSelf: 'center',
  },
});