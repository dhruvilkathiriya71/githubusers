import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { icons } from '../../helper/imageConstants';
import { style } from './styles';

const UsersListItem = ({ data, onStarPress, isBookMarked }) => {
  const name = data?.login || '';
  const avatar = { uri: data?.avatar_url } || icons.defaultUser;

  const hitSlop = { top: 5, bottom: 5, right: 5, left: 5 };

  return (
    <View style={style.mainContainer}>
      <Image source={avatar} style={style.avatar} resizeMode={'cover'} />
      <Text style={style.userName}>{name}</Text>
      <TouchableOpacity style={style.starIconContainer} hitSlop={hitSlop} onPress={onStarPress}>
        <Image source={icons.star} style={isBookMarked ? style.starIcon : style.unBookMarkedStarIcon} resizeMode={'contain'} />
      </TouchableOpacity>
    </View>
  );
};

export default UsersListItem;
