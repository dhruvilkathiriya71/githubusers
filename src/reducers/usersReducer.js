import _ from 'lodash';

import { GET_USERS, GET_USERS_LOADING, SEARCH_USERS, BOOKMARK_USERS } from '../actions/types';

const INITIAL_STATE = {
  users: [],
  searchedUsers: [],
  searchUsersText: '',
  bookmarkedUsers: [],
  bookmarkedSearchedUsers: [],
  bookmarkedUserIds: [],
  bookMarkSearchText: '',
  loading: false,
  shouldLoadMore: true,
  refreshing: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS_LOADING:
      return {
        ...state,
        loading: action.payload?.loading,
        refreshing: action.payload?.refreshing,
      };
    case GET_USERS:
      const usersList = _.uniqBy([...state.users, ...action.payload], 'id');
      return {
        ...state,
        users: usersList,
        shouldLoadMore: action.payload?.length ? true : false,
      };
    case SEARCH_USERS:
      const isBookMarked = action.payload?.isBookMarked;
      const searchUsersList = _.uniqBy(action.payload?.data, 'id');
      return {
        ...state,
        searchedUsers: isBookMarked ? state.searchedUsers : searchUsersList,
        searchUsersText: isBookMarked ? state.searchUsersText : action.payload?.text,
        bookmarkedSearchedUsers: isBookMarked ? searchUsersList : state.bookmarkedSearchedUsers,
        bookMarkSearchText: isBookMarked ? action.payload?.text : state.bookMarkSearchText,
      };
    case BOOKMARK_USERS:
      const bookmarkUsersList = _.uniqBy(action.payload, 'id');
      const bookmarkedUserIds = bookmarkUsersList.map((item) => item.id);
      return {
        ...state,
        bookmarkedUsers: bookmarkUsersList,
        bookmarkedUserIds,
      };
    default:
      return state;
  }
};
