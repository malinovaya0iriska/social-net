import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../Redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {maxLenghtCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormsControls";


export type MyPostsPropsType = {
    profilePage: ProfilePageType
    onAddNewPost: (text: string) => void
}

const maxLength50 = maxLenghtCreator(50)
export const MyPosts = (props: MyPostsPropsType) => {

    let postsItem = props.profilePage.posts.map(p => <Post key={p.id} id={p.id} postText={p.postText}
                                                           likesCount={p.likesCount}/>)

    const onAddNewPost = (values:any) => {
            props.onAddNewPost(values.postBody)
    }

    return (
        <div>
            <div>My Posts</div>
            <PostReduxForm onSubmit={onAddNewPost}/>
            {postsItem}
        </div>
    )
}
type FormDataType = {
    postBody: string
}

const AddPostForm: React.FunctionComponent<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <Field name={'postBody'}
               component={Textarea}
               placeholder={'Enter your post'}
               validate = {[required, maxLength50]}
        />
        <button>Add post</button>
    </form>
)}

const PostReduxForm: any = reduxForm<FormDataType>({form: 'profileAddPostForm'}) (AddPostForm)