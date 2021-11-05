import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {
    getUserStatusThunkCreator,
    ProfileAPIType,
    setUserProfileThunkCreator,
    updateStatusThunkCreator,
} from "../../Redux/profileReducer";
import {StateReduxType} from "../../Redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom'
import {WithAuthRedirectComponent} from "../../hoc/WitAuthRedirect";
import {compose} from "redux";


type mapProfileStateToPropsType = {
    profile: ProfileAPIType | null
    status: string
    isAuth: boolean
    authorizedUserId: string | null
}
type mapProfileDispatchToPropsType = {
    setUserProfile: (userId: string) => void
    getUserStatus: (userID: string) => void
    updateStatus: (status: string) => void
}
type PathParamsType = {
    userId: string

}

class ProfileWrapperContainer extends React.Component<mapProfileStateToPropsType & mapProfileDispatchToPropsType & RouteComponentProps<PathParamsType>> {
    componentDidMount() {
        let userId = this.props.match.params.userId

        if (this.props.authorizedUserId === null) {
            this.props.history.push('/login')
        } else if (!userId) {
            userId= this.props.authorizedUserId
        }

        this.props.setUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return <>
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        </>
    }
}

const mapProfileStateToProps = (state: StateReduxType): mapProfileStateToPropsType => {

    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}
// один вариант синтаксиса, создаем промежуточную переменную,
// в которой передаём в HOC,
// эту переменную потом в коннект или
// как здесь - в outer
// второй смотри в DialogsContainer
/*
const AuthRedirectComponent = WithAuthRedirectComponent(ProfileWrapperContainer)

const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
*/
// обернули все в compose
export const ProfileContainer = compose<React.ComponentType>(
    connect(mapProfileStateToProps,
        {
            setUserProfile: setUserProfileThunkCreator,
            getUserStatus: getUserStatusThunkCreator,
            updateStatus: updateStatusThunkCreator,
        } as mapProfileDispatchToPropsType),
    withRouter,
    WithAuthRedirectComponent
)(ProfileWrapperContainer);