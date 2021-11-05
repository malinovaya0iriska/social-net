import React from 'react'
import style from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {Preloader} from "../common/Preloader/Preloader";

type HeaderPropsType = {
    isFetching: boolean
    login: string | null
    isAuth: boolean
    logOutThunkCreator: () => void
    children?: React.ReactNode
}
export const Header: React.FC<HeaderPropsType> = ({login, isAuth, isFetching, logOutThunkCreator, children}) => {
    return (
        <header className={style.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Vk_Logo.svg/240px-Vk_Logo.svg.png'/>
            {
                isFetching
                    ? <Preloader style={style.loginBlock}/>
                    :
                    <div className={style.loginBlock}>
                        {isAuth ? <div> {login}
                                <button onClick={logOutThunkCreator}>Log out</button>
                            </div> :
                            <NavLink to={'/login'}>Login</NavLink>}
                    </div>}
        </header>
    )
}