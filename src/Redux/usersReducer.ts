import {ActionsTypeFromRootReducer} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

/*export type UsersType = {
    id: string
    userName: string
    avatarURL: string
    isFollowed: boolean
    location: { city: string, country: string }
    status: string
}*/
export type UsersDataType = {
    id: string
    name: string
    photos: { large: string, small: string }
    followed: boolean
    location: { city: string, country: string }
    status: string
}
export type UsersPageType = {
    users: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}

let initialState: UsersPageType = {
    users: [],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

export const usersReducer = (state: UsersPageType = initialState, action: ActionsTypeFromRootReducer): UsersPageType => {
    switch (action.type) {
        case 'IS_FOLLOWED':
            return {
                ...state,
                users: state.users.map((u: UsersDataType): UsersDataType => u.id === action.id ? {
                    ...u,
                    followed: true
                } : u),

            }
        case 'IS_UNFOLLOWED':
            return {
                ...state,
                users: state.users.map((u: UsersDataType): UsersDataType => u.id === action.id ? {
                    ...u,
                    followed: false
                } : u),

            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.page,
            }
        case 'SET_TOTAL_USER-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalCount,
            }
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter((id: string) => id != action.userID)
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

export const follow = (id: string) => {
    return {
        type: 'IS_FOLLOWED',
        id,
    } as const
}
export const unfollow = (id: string) => {
    return {
        type: 'IS_UNFOLLOWED',
        id,
    } as const
}
export const setUsers = (users: UsersDataType[]) => {
    return {
        type: 'SET_USERS',
        users,
    } as const
}
export const setCurrentPage = (page: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        page,
    } as const
}
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET_TOTAL_USER-COUNT',
        totalCount,
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching,
    } as const
}
export const toggleFollowing = (userID: string, isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        userID,
        isFetching
    } as const
}


//THUNK
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalUsersCount(response.totalCount))
        })
    }
}
export const followThunkCreator = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowing(id, true))
        usersAPI.follow(id)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(follow(id))
                }
                dispatch(toggleFollowing(id, false))
            })
    }
}
export const unfollowThunkCreator = (id: string) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleFollowing(id, true))
        usersAPI.unfollow(id)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(unfollow(id))
                }
                dispatch(toggleFollowing(id, false))
            })
    }
}