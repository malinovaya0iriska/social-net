import s from './UserItem.module.css'
import userPhoto from './../../../assets/userPhoto.png'
import React from "react";
import {NavLink} from 'react-router-dom'
import {usersAPI} from "../../../api/api";

type UserItemPropsType = {
    name: string
    followed: boolean
    id: string
    photoSmall: string
    follow: (id: string) => void
    unfollow: (id: string) => void
    followingInProgress: Array<string>
}

export const UserItem = (props: UserItemPropsType) => {

    const onFollowClickHandler = () => {
        props.follow(props.id)
    }

    const onUnfollowClickHandler = () => {
     props.unfollow(props.id)
    }

    return <div>
        <h3>{props.name}
            <pre/>
            {props.id}</h3>
        <NavLink to={`/profile/` + props.id}>
            <img className={s.img} src={props.photoSmall !== null ? props.photoSmall : userPhoto} alt={props.name}/>
        </NavLink>
        {props.followed ? <button onClick={onUnfollowClickHandler}
                                  disabled={props.followingInProgress.some(id => id === props.id)}>Unfollow</button> :
            <button onClick={onFollowClickHandler}
                    disabled={props.followingInProgress.some(id => id === props.id)}>Follow</button>}
    </div>
}