import React, { useReducer } from 'react'
import MainReducer from './MainReducer'
import MainContext from './MainContext'

const MainState = (props) => {
    const initialState = {
        language: 'EN',
        mode: 'Dark'
    }

    const [state, dispatch] = useReducer(MainReducer, initialState)

    const setLanguage = (lan) => {
        dispatch({
            type: 'SET_LANGUAGE',
            payload: lan
        })
    }

    const setMode = (mode) => {
        dispatch({
            type: 'SET_MODE',
            payload: mode 
        })
    }

    return (
        <MainContext.Provider value={{
            language: state.language,
            mode: state.mode,
            setMode,
            setLanguage
        }}>
            {props.children}
        </MainContext.Provider>
    )
}

export default MainState;