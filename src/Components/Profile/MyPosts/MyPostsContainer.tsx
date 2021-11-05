import {addPost} from "../../../Redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {ActionsTypeFromRootReducer, StateReduxType} from "../../../Redux/redux-store";
import {connect} from "react-redux";


const mapStateToProps =(state:StateReduxType) => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps =(dispatch: (AC: ActionsTypeFromRootReducer)=>void) => {
    return {
        onAddNewPost: (postText:string) => {
            dispatch(addPost(postText))
        },
    }
}
export const MyPostsContainer =  connect(mapStateToProps, mapDispatchToProps) (MyPosts)
