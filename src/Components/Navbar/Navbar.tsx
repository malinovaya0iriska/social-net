import {NavLink} from 'react-router-dom'
import style from './Navbar.module.css'

export const Navbar = () => {
    return (
        <div className={style.nav}>
            <div>
                <NavLink to='/profile/'>Моя страница </NavLink>
            </div>
            <div>
                <NavLink to='/dialogs'>Мои сообщения </NavLink>
            </div>
            <div>
                <NavLink to='/my_friends'> Мои друзья</NavLink>
            </div>
            <div>
                <NavLink to='/users'>Пользователи</NavLink>
            </div>
         <div>
        <NavLink to='/my_photo'>Мои фотографии</NavLink>
    </div>
    </div>
)
}