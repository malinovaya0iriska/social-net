import userPhoto from './../../../assets/userPhoto.png'
import style from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileAPIType} from "../../../Redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

export const ProfileInfo = (props: { profile: ProfileAPIType | null, status: string, updateStatus: (status: string) => void }) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={style.wallpaper}>
               <p> Hi, I am {props.profile.fullName}</p>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJkgaqXA1NEtiXPaBtZndyZE13EtWtTb4cg&usqp=CAU'/>
            </div>
            <img src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto}
                 alt={`${props.profile.fullName} photo`}/>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}