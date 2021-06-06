import { StyleSheet } from 'react-native';

import { colors } from '../../helper/colors';
import { fontSize, wp } from '../../helper/constants'

const AVATAR_SIZE = 18;

export const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.grayBgColor,
    width: wp(42.5),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: wp(5),
    marginLeft: wp(5),
    borderRadius: wp(2.5),
    paddingVertical: wp(5)
  },
  avatar: {
    height: wp(AVATAR_SIZE),
    width: wp(AVATAR_SIZE),
    borderRadius: wp(AVATAR_SIZE / 2),
  },
  userName: {
    marginTop: wp(1.5),
    fontSize: fontSize(14),
    color: colors.textColor,
  },
  starIconContainer: {
    position: 'absolute',
    top: wp(2.5),
    right: wp(2.5),
  },
  starIcon: {
    height: wp(5),
    width: wp(5),
    tintColor: colors.starColor
  },
  unBookMarkedStarIcon: {
    height: wp(5),
    width: wp(5),
    tintColor: 'gray'
  },
});
