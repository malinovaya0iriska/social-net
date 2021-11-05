import {connect} from "react-redux";
import {StateReduxType} from "../../Redux/redux-store";
import {
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    toggleFollowing,
    toggleIsFetching,
    unfollowThunkCreator,
    UsersDataType
} from "../../Redux/usersReducer";
import React from "react";
import {UsersPresentationComponent} from "./UsersPresentationComponent";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersSuperSelector
} from "../../Redux/users-selector";

export type mapUserStateToPropsType = {
    users: UsersDataType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<string>,
    isAuth: boolean
}

export type mapUserDispatchToPropsType = {

    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowing: (userID: string, isFetching: boolean) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    followThunkCreator: (id: string) => void
    unfollowThunkCreator: (id: string) => void
}

export class UsersWrapperContainer extends React.Component<mapUserStateToPropsType & mapUserDispatchToPropsType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    }


    render() {
        /*if (!this.props.isAuth){
            return <Redirect to={'/login'}/>
        }*/
        return <>
            {this.props.isFetching
                ? <Preloader/> : null}
            <UsersPresentationComponent users={this.props.users}
                                        pageSize={this.props.pageSize}
                                        totalUsersCount={this.props.totalUsersCount}
                                        currentPage={this.props.currentPage}
                                        follow={this.props.followThunkCreator}
                                        unfollow={this.props.unfollowThunkCreator}
                                        setCurrentPage={this.props.setCurrentPage}
                                        setTotalUsersCount={this.props.setTotalUsersCount}
                                        onClickHandler={this.onPageChanged}
                                        followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state: StateReduxType): mapUserStateToPropsType => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: getIsAuth(state)
    }
}

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps,
        {
            setCurrentPage,
            setTotalUsersCount,
            toggleIsFetching,
            toggleFollowing,
            getUsersThunkCreator,
            followThunkCreator,
            unfollowThunkCreator,
        } as mapUserDispatchToPropsType)
)(UsersWrapperContainer);