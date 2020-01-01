import { NOTIFICATION } from './notification'
import { apiCall } from '../services/http'
export const LOGOUT = 'LOGOUT';
export const USER = 'USER';
export const FETCH_CURRENT_PENDING = 'FETCH_CURRENT_PENDING';
export const FETCH_CURRENT_ERROR = 'FETCH_CURRENT_ERROR';
export const FETCH_CURRENT_SUCCESS = 'FETCH_CURRENT_SUCCESS';



export function logoutAction() {
    console.log("--- --- LOGOUT ACTOIN --- ---")
    return async (dispatch) => {
        dispatch({ type: LOGOUT, payload: true });
    }
}

export function fetchCurrentAction() {
    console.log("--- --- FETCH_REQUEST ACTOIN --- ---")
    return async (dispatch) => {
        try {
            dispatch({ type: FETCH_CURRENT_PENDING, payload: true });
            let result = await apiCall({
                path: "/api/auth/fetch-current/",
                method: "GET",
                authorization: true
            })
            result = await result.json();
            if (result.error) {
                dispatch({ type: FETCH_CURRENT_ERROR, payload: result.error.message.toString() });
            } else {
                dispatch({ type: FETCH_CURRENT_SUCCESS, payload: result.data });
                dispatch({ type: USER, payload: result.data });
            }
        } catch (error) {
            dispatch({ type: FETCH_CURRENT_ERROR, payload: error.toString() });
            dispatch({ type: NOTIFICATION, payload: { type: 'error', 'message': "GENERIC_ERROR" } });
        }
    }
}