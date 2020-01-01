export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export function selectLanguageAction(language) {
    console.log("--- --- SELECT_LANGUAGE ACTOIN --- ---")
    return async (dispatch) => {
        dispatch({ type: SELECT_LANGUAGE, payload: language });
    }
}