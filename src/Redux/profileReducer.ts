import {v1} from "uuid";
import {ActionsTypeFromRootReducer} from "./redux-store";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type PostType = {
    id: string
    postText: string
    likesCount: number
}

export type ProfileAPIType = {
    aboutMe: string | null,
    contacts: {
        facebook: string | null,
        website: string | null,
        vk: string | null,
        twitter: string | null,
        instagram: string | null,
        youtube: string | null,
        github: string | null,
        mainLink: string | null,
    },
    lookingForAJob: boolean | null,
    lookingForAJobDescription: string | null,
    fullName: string | null,
    userId: string | null,
    photos: {
        small: string | null,
        large: string | null,
    }
}
let initialState = {
    posts: [
        {id: v1(), postText: 'Hello,world!', likesCount: 45},
        {id: v1(), postText: `${'it`s my first message!'}`, likesCount: 37},
        {id: v1(), postText: 'I a\'m doing IT-KAMASUTRA', likesCount: 1224}
    ] as PostType[],
    profile: null as null | ProfileAPIType,
    status: ''

}
export type ProfilePageType = typeof initialState

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypeFromRootReducer): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: v1(), postText: action.postText, likesCount: 0}],
            }

        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            }

        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }
}

export const addPost = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText
    } as const
}
export const setUserProfile = (profile: ProfileAPIType) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: 'SET_STATUS',
        status
    } as const
}


export const setUserProfileThunkCreator = (userId: string) => {
    return (dispatch: Dispatch) => {
        usersAPI.getUserIDProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }
}

export const getUserStatusThunkCreator = (userID: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userID)
            .then(response => {
                debugger
                dispatch(setStatus(response.data))
            })
    }
}
export const updateStatusThunkCreator = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
}
    }
