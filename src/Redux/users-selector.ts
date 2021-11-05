import {StateReduxType} from "./redux-store";
import {createSelector} from "reselect";
import {UsersDataType} from "./usersReducer";

export const getUsers = (state:StateReduxType) => {
    return state.usersPage.users
}
export const getUsersSuperSelector = createSelector(getUsers,(users:UsersDataType[])=>{ return users.filter(u=>true)})

// усложняем специально, чтобы показать переррисовки из-за нового массива после filter
/*export const getUsersSelector = (state: StateReduxType) => {
    return getUsers(state).filter(u=>true)
}*/
 // простой забор данных из state, можно делать без функции даже сразу в mapStateToProps

export const getPageSize = (state:StateReduxType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state:StateReduxType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state:StateReduxType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state:StateReduxType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state:StateReduxType) => {
    return state.usersPage.followingInProgress
}
export const getIsAuth = (state:StateReduxType) => {
    return state.auth.isAuth
}

