import { apiUrl } from '../config/config'; // eslint-disable-line
import { NOTIFICATION } from './notification'
import { USER } from './app';
import history from '../components/App/history'

export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_RESET = 'RESET';

export function loginAction(username, password) {
    console.log("--- --- LOGIN_REQUEST ACTOIN --- ---")
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_PENDING, payload: true });
            const data = { username, password };
            let result = await fetch(`${apiUrl}/api/auth/login/`,
                {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                });
            result = await result.json();
            console.log(result)
            if (result.error) {
                dispatch({ type: LOGIN_ERROR, payload: result.error.message.toString() });
                dispatch({ type: NOTIFICATION, payload: { type: 'error', 'message': result.error.message.toString() } });
            } else {
                localStorage.setItem('token', result.data.token)
                dispatch({ type: LOGIN_SUCCESS, payload: result.data });
                dispatch({ type: USER, payload: result.data });
                history.push('/')

            }
        } catch (error) {
            dispatch({ type: LOGIN_ERROR, payload: error.message.toString() });
            dispatch({ type: NOTIFICATION, payload: { type: 'error', 'message': "GENERIC_ERROR" } });
        }
    }
}

export function loginReset() {
    console.log("--- --- LOGIN_RESET ACTOIN --- ---")
    return async (dispatch) => {
        dispatch({ type: LOGIN_RESET, payload: true });
    }
}