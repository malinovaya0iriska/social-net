import {applyMiddleware, combineReducers, createStore} from "redux";
import {addPost, profileReducer, setStatus, setUserProfile} from "./profileReducer";
import {AddNewMessageAC, dialogsReducer} from "./dialogsReducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowing,
    toggleIsFetching,
    unfollow,
    usersReducer
} from "./usersReducer";
import {authReducer, setAuthUserData} from "./authReducer";
import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from 'redux-form';
import {appReducer, setInitialized} from "./appReducer";

//create object with different reducers

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})


export let storeRedux = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export type RootReducerType = typeof rootReducer

export type StateReduxType = ReturnType<RootReducerType>
//export type StoreReduxType = typeof storeRedux


export type ActionsTypeFromRootReducer =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof AddNewMessageAC>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowing>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setInitialized>


// @ts-ignore
window.store = storeRedux