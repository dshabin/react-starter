import { DEPOSIT_PENDING } from '../_actions/deposit';
import { DEPOSIT_ERROR } from '../_actions/deposit';
import { DEPOSIT_SUCCESS } from '../_actions/deposit';
import { DEPOSIT_RESET } from '../_actions/deposit';

const DEFAULT_STATE = {}

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case DEPOSIT_PENDING:
            console.log('--- --- DEPOSIT_PENDING REDUCER --- ---', action.payload);
            return {
                ...state,
                pending: true
            };

        case DEPOSIT_ERROR:
            console.log('--- --- DEPOSIT_ERROR REDUCER --- ---', action.payload);
            return {
                ...state,
                pending: false,
                error: action.payload
            };

        case DEPOSIT_SUCCESS:
            console.log('--- --- DEPOSIT_SUCCESS REDUCER --- ---', action.payload);
            return {
                ...state,
                pending: false,
                success: true
            };
        case DEPOSIT_RESET:
            console.log('--- --- DEPOSIT_RESET REDUCER --- ---', action.payload);
            return {};
        default:
            return state
    }
}