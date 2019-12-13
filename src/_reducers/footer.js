import {
    SELECT_LANGUAGE,
    
} from '../_actions/footer';

const DEFAULT_STATE = {
    language: 'english',
}

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case SELECT_LANGUAGE:
            console.log('--- --- SELECT_LANGUAGE REDUCER --- ---', action.payload);
            return { ...state, language: action.payload };

        default:
            return state
    }
}