import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileAPIType} from "../../Redux/profileReducer";

type ProfilePropsType = {
    //children: React.ReactNode
    profile: ProfileAPIType | null
    status: string
    updateStatus: (status: string) => void
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}