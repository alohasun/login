import { combineReducers } from 'redux';
import isPending from './ispending_reducer';
import message from './message_reducer';

 const rootReducer = combineReducers({
    isPending:isPending,
    message:message
});

export default rootReducer;