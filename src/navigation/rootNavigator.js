import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Users from '../screens/users';
import BookmarkedUsers from '../screens/bookmarkedUsers';
import { style } from './styles';
import { colors } from '../helper/colors';

const Tab = createMaterialTopTabNavigator();

const UsersTabs = () => {
  const tabOptions = {
    activeTintColor: colors.primaryColor,
    indicatorStyle: style.indicatorStyle,
    labelStyle: style.labelStyle,
  };

  return (
    <Tab.Navigator tabBarOptions={tabOptions}>
      <Tab.Screen name={'Users'} component={Users} />
      <Tab.Screen name={'BookmarkedUsers'} component={BookmarkedUsers} />
    </Tab.Navigator>
  );
};

const RootNavigator = () => (
  <NavigationContainer>
    <UsersTabs />
  </NavigationContainer>
);

export default RootNavigator;
