import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
