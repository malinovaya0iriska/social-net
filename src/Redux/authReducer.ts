import {ActionsTypeFromRootReducer} from "./redux-store";
import {Dispatch} from "redux";
import {toggleIsFetching} from "./usersReducer";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

export type AuthType = {
    id: string | null
    login: string | null
    email: string | null
    isAuth: boolean
    isFetching: boolean
}

let initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
}

export const authReducer = (state: AuthType = initialState, action: ActionsTypeFromRootReducer): AuthType => {
    switch (action.type) {
        case 'SET_USER_DATA':
            return {
                ...state,
                id: action.payload.id,
                login: action.payload.login,
                email: action.payload.email,
                isAuth: action.payload.isAuth,
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching,
            }
        default:
            return state
    }
}


export const setAuthUserData = (id: string | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {id, login, email, isAuth},
    } as const
}



export const getAuthUserDataThunkCreator = () => {

    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
       return authAPI.me()
            .then(response => {
                if (response.resultCode === 0) {
                    let {login, id, email} = response.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
                dispatch(toggleIsFetching(false))
            })
    }
}


export const logInThunkCreator = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        dispatch(toggleIsFetching(true))
        authAPI.login(email, password, rememberMe)
            .then(response => {

                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserDataThunkCreator())
                }else{
                   let message =  response.data.messages.length >0 ? response.data.messages[0] : 'Some error occurred'
                    dispatch(stopSubmit('email', {_error: message}))
                }
                dispatch(toggleIsFetching(false))
            })
    }
}
export const logOutThunkCreator = () => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        authAPI.logOut()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
                dispatch(toggleIsFetching(false))
            })
    }
}