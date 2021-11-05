import React from "react";
import {UserItem} from "./UserItem/UserItem";
import style from "./UserItem/UserItem.module.css";
import {UsersDataType} from "../../Redux/usersReducer";

type UsersPresentationComponentPropsType = {
    users: UsersDataType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (id: string) => void
    unfollow: (id: string) => void
    onClickHandler: (page: number) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (count: number) => void
    followingInProgress: Array<string>
}
export const UsersPresentationComponent = (props: UsersPresentationComponentPropsType) => {

    let usersList = props.users
        .map(u => <UserItem key={u.id} id={u.id} name={u.name} followed={u.followed}
                            follow={props.follow}
                            unfollow={props.unfollow}
                            photoSmall={u.photos.small}
                            followingInProgress={props.followingInProgress}
        />)
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <h2>Users</h2>
        <div className={style.pages}>
            {pages.map(p => {

                    return <span key={p} className={`${props.currentPage === p ? style.currentPage : ''}`}
                                 onClick={(e) => {
                                     props.onClickHandler(p)
                                 }}>{p}</span>
                }
            )}
        </div>
        {usersList}
    </div>
}
