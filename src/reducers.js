import {
    SEARCH_CHARACTERS_REQUEST,
    SEARCH_CHARACTERS_SUCCESS,
    SEARCH_CHARACTERS_ERROR
} from './actions';

const initialState = {
    characters: [],
    loading: false,
    error: null
};

export function characterReducer(state=initialState, action) {
    // Handle these sync actions
    if (action.type === SEARCH_CHARACTERS_REQUEST) {
        return Object.assign({}, state, {
            ...state,
            loading: true
        })
    }
    else if (action.type === SEARCH_CHARACTERS_SUCCESS) {
        return Object.assign({}, state, {
            ...state,
            characters: action.characters,
            loading: false
        })
    }
    else if (action.type === SEARCH_CHARACTERS_ERROR) {
        return Object.assign({}, state, {
            ...state,
            error: action.error,
            loading: false
        })
    }
    return state;
}
