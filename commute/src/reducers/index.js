import { combineReducers } from 'redux'; 
import RegisterReducer from './RegisterReducer';
import BasicInfoReducer from './BasicInfoReducer'; 

export default combineReducers({
    register: RegisterReducer,
    basicInfo: BasicInfoReducer
});
