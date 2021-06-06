import React from 'react';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { removeBookMarkedUser, searchUsers } from '../../actions';
import { SearchBar, UsersListItem } from '../../components';
import { style } from './styles';

const BookmarkedUsers = () => {
  const dispatch = useDispatch();
  const {
    refreshing,
    bookmarkedSearchedUsers,
    bookMarkSearchText,
    bookmarkedUsers,
  } = useSelector(state => state.users);

  const onSearchTextChange = (text) => dispatch(searchUsers({ text, users: bookmarkedUsers, isBookMarked: true }));

  const onStarPress = (user) => dispatch(removeBookMarkedUser({ user }));

  const renderItem = ({ item }) => (
    <UsersListItem
      data={item}
      onStarPress={() => onStarPress(item)}
      isBookMarked={true}
    />
  );

  const keyExtractor = (item) => item?.id?.toString();

  const listData = bookMarkSearchText.length > 0 ? bookmarkedSearchedUsers : bookmarkedUsers;

  return (
    <View style={style.mainContainer}>
      <SearchBar onChangeText={onSearchTextChange} placeholder={'Search Users'} />
      <FlatList
        data={listData}
        numColumns={2}
        keyboardShouldPersistTaps={'never'}
        contentContainerStyle={style.listContentContainer}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default BookmarkedUsers;
