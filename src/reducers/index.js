import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserInfoReducer from './user_info_reducer';
import UserFeedReducer from './feeds_reducer';
import UserConnectionsReducer from './connections_reducer';
// import CreateUserReducer from './create_user_reducer';
const rootReducer = combineReducers({
  form: formReducer,
  userInfo: UserInfoReducer,
  userFeeds: UserFeedReducer,
  userConnections: UserConnectionsReducer
});

export default rootReducer;
