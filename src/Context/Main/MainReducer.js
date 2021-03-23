import { SET_LANGUAGE, SET_MODE } from '../types'

const MainReducer = (state, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        case SET_MODE:
            return {
                ...state,
                mode: action.payload
            }
        default:
            return {state}
    }
}

export default MainReducer