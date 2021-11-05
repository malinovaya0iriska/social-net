import React from 'react'
import {StateReduxType} from "../../Redux/redux-store";
import {setAuthUserData, getAuthUserDataThunkCreator, logOutThunkCreator} from "../../Redux/authReducer";
import {connect} from "react-redux";
import {Header} from "./Header";
import {toggleIsFetching} from "../../Redux/usersReducer";


class HeaderWrapperContainer extends React.Component<mapHeaderStateToPropsType & mapHeaderDispatchToPropsType> {

    render() {
        return <Header {...this.props}/>
    }
}

type mapHeaderDispatchToPropsType = {
    setAuthUserData: (id: string | null, login: string | null, email: string | null, isAuth: boolean) => void
    toggleIsFetching: (isFetching: boolean) => void
    getAuthUserDataThunkCreator: () => void
    logOutThunkCreator: () => void
}

type mapHeaderStateToPropsType = {
    isAuth: boolean
    login: string | null
    isFetching: boolean
}
const mapHeaderStateToProps = (state: StateReduxType): mapHeaderStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        isFetching: state.auth.isFetching,
    }
}
export const HeaderContainer = connect(mapHeaderStateToProps, {

    setAuthUserData,
    toggleIsFetching,
    getAuthUserDataThunkCreator,
    logOutThunkCreator,
} as mapHeaderDispatchToPropsType)(HeaderWrapperContainer);