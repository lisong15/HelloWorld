/**
 * Created by liyang on 16/12/5.
 */
import {Alert} from 'react-native';
import * as TYPES from './types';

let testUser = {
    'name': 'juju',
    'age': '20',
    'avatar': ''
};

let skipUser = {
    'name': 'juju',
    'age': '20',
    'avatar': ''
};


export function login(opt) {
    return (dispatch) => {
        dispatch({'type': TYPES.LOGGED_DOING});
        let inner_get = fetch('http://www.baidu.com')
            .then((res) => {
                dispatch({'type': TYPES.LOGGED_IN, user: testUser});
            }).catch((e) => {
                AlertIOS.alert(e.message);
                dispatch({'type': TYPES.LOGGED_ERROR, error: e});
            });
    }
}

// skip login
export function skipLogin() {
    return {
        'type': TYPES.LOGGED_IN,
        'user': skipUser,
    }
}


// logout
export function logOut() {
    return {
        'type': TYPES.LOGGED_OUT
    }
}