import {ActionsTypeFromRootReducer} from "./redux-store";
import {getAuthUserDataThunkCreator} from "./authReducer";


type AppType = {
    initialized: boolean
}

let initialState: AppType = {
    initialized: false
}

const SET_INITIALIZED = 'SET_INITIALIZED'

export const appReducer = (state: AppType = initialState, action: ActionsTypeFromRootReducer): AppType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const setInitialized = () => ({type: SET_INITIALIZED} as const)

export const setInitializedThunkCreator = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserDataThunkCreator())
    promise.then(() => dispatch(setInitialized()))
}

