import AsyncStorage from '@react-native-async-storage/async-storage';

import { GET_USERS, GET_USERS_LOADING, SEARCH_USERS, BOOKMARK_USERS } from './types';
import { makeAPIRequest } from '../helper/global';
import { api, GET } from '../helper/apiConstants';
import { BookMarkedUsers } from '../helper/constants';

export const getUsers = ({ since, refreshing }) => async dispatch => {
  dispatch({ type: GET_USERS_LOADING, payload: { loading: true, refreshing: !!refreshing }, });

  const headers = { Accept: 'application/vnd.github.v3+json' };
  const params = { since };
  makeAPIRequest({
    method: GET,
    url: api.users,
    headers,
    params,
  })
    .then(response => {
      dispatch({ type: GET_USERS, payload: response?.data || [] });
      dispatch({ type: GET_USERS_LOADING, payload: { loading: false, refreshing: false } });
    })
    .catch(() => {
      dispatch({ type: GET_USERS_LOADING, payload: { loading: false, refreshing: false }, });
    });
};

export const searchUsers = ({ text, users, isBookMarked }) => async dispatch => {
  const searchText = text.toLowerCase();
  const filteredUsers = users.filter((item) => {
    return item?.login.toLowerCase().match(searchText);
  });
  dispatch({ type: SEARCH_USERS, payload: { data: filteredUsers, text, isBookMarked } });
};

export const bookMarkUser = ({ user }) => async dispatch => {
  let bookMarkedUsers = await AsyncStorage.getItem(BookMarkedUsers);
  bookMarkedUsers = bookMarkedUsers ? JSON.parse(bookMarkedUsers) : [];
  const userIndex = bookMarkedUsers.findIndex((item) => item.id === user.id);
  if (userIndex === -1) {
    bookMarkedUsers.push(user);
  }
  AsyncStorage.setItem(BookMarkedUsers, JSON.stringify(bookMarkedUsers));
  dispatch({ type: BOOKMARK_USERS, payload: bookMarkedUsers });
};

export const removeBookMarkedUser = ({ user }) => async dispatch => {
  let bookMarkedUsers = await AsyncStorage.getItem(BookMarkedUsers);
  bookMarkedUsers = JSON.parse(bookMarkedUsers);
  bookMarkedUsers = bookMarkedUsers.filter((item) => item.id !== user.id);
  AsyncStorage.setItem(BookMarkedUsers, JSON.stringify(bookMarkedUsers));
  dispatch({ type: BOOKMARK_USERS, payload: bookMarkedUsers });
};

export const setBookMarkedUser = () => async dispatch => {
  const bookMarkedUsers = await AsyncStorage.getItem(BookMarkedUsers);
  dispatch({ type: BOOKMARK_USERS, payload: JSON.parse(bookMarkedUsers) });
};
