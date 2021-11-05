import s from './DialogItem.module.css'
import React from "react";
import {NavLink} from 'react-router-dom'

export type dialogItemsPropsType = {
    id: string
    name: string
    avatar: string
}
export const DialogItem = (props: dialogItemsPropsType) => {
    return (
        <li className={s.messageList} key={props.id}><img src={props.avatar} alt='user'/><NavLink
            to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </li>
    )
}
