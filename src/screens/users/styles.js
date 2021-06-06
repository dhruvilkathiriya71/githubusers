import { StyleSheet } from 'react-native';

import { colors } from '../../helper/colors';
import { wp } from '../../helper/constants';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContentContainer: {
    paddingTop: wp(5),
  },
  footerContainer: {
    alignItems: 'center',
    marginBottom: wp(5),
  },
});
