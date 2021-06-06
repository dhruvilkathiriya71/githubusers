import React, { useEffect } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { bookMarkUser, getUsers, searchUsers, setBookMarkedUser } from '../../actions';
import { SearchBar, UsersListItem } from '../../components';
import { colors } from '../../helper/colors';
import { style } from './styles';

const Users = () => {
    const dispatch = useDispatch();
    const {
        users,
        loading,
        refreshing,
        shouldLoadMore,
        searchedUsers,
        searchUsersText,
        bookmarkedUserIds
    } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(setBookMarkedUser());
        dispatch(getUsers({ since: 0 }));
    }, []);

    const onSearchTextChange = (text) => dispatch(searchUsers({ text, users }));

    const onStarPress = (user) => dispatch(bookMarkUser({ user }));

    const onRefresh = () => dispatch(getUsers({ since: 0, refreshing: true }));

    const onEndReached = () => {
        if (!loading && shouldLoadMore && searchUsersText.length === 0) {
            const lastUserId = users[users.length - 1]?.id;
            dispatch(getUsers({ since: lastUserId }));
        }
    };

    const renderFooterComponent = () => {
        return loading && users.length > 0 ? (
            <View style={style.footerContainer}>
                <ActivityIndicator size={'small'} color={colors.primaryColor} />
            </View>
        ) : null;
    };

    const renderItem = ({ item }) => (
        <UsersListItem
            data={item}
            onStarPress={() => onStarPress(item)}
            isBookMarked={bookmarkedUserIds.includes(item?.id)}
        />
    );

    const keyExtractor = (item) => item?.id?.toString();

    const listData = searchUsersText.length > 0 ? searchedUsers : users;

    if (users.length === 0 && loading) {
        return (
            <View style={style.loadingContainer}>
                <ActivityIndicator size={'large'} color={colors.primaryColor} />
            </View>
        );
    }

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
                onRefresh={onRefresh}
                refreshing={refreshing}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                onEndReachedThreshold={0.1}
                onEndReached={onEndReached}
                ListFooterComponent={renderFooterComponent}
            />
        </View>
    );
};

export default Users;
