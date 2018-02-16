import {
    USERNAME_CHANGED
} from '../actions/';

const INITIAL_STATE = {
    username: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USERNAME_CHANGED:
            console.log('this is not getting called', action.payload);
            return { ...state, username: action.payload }; 
        default:
            return { INITIAL_STATE };
    }
};
