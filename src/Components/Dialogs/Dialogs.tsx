import style from './Dialogs.module.css'
import {DialogItem} from "./DialogItems/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {mapDispatchToPropsType, mapStateToPropsType} from "./DialogsContainer";
import {authorsOfMessageType, MessageType} from "../../Redux/dialogsReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLenghtCreator, required} from "../../utils/validators/validator";


type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

export const Dialogs = (props: DialogsPropsType) => {

    let authorsList = props.dialogsPage.authorsOfMessage.map((a: authorsOfMessageType) => <DialogItem key={a.id}
                                                                                                      avatar={a.avatar}
                                                                                                      name={a.name}
                                                                                                      id={a.id}/>)
    let messagesList = props.dialogsPage.messages.map((m: MessageType) => <MessageItem key={m.id} id={m.id}
                                                                                       message={m.message}/>)
    const sendMessageFromForm = (values: FormDataType) => {
        props.onAddNewMessage(values.addMessageBody)
    }

    return (
        <div className={style.dialogs}>
            <ul className={style.authors}>

                {authorsList}

            </ul>

            <div className={style.items}>
                <ul className={style.messages}>
                    {messagesList}
                </ul>
            </div>
            <AddMessageReduxForm onSubmit={sendMessageFromForm}/>
        </div>
    )
}
export type FormDataType = {
    addMessageBody: string
}

const maxLenght60 = maxLenghtCreator(60)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={'addMessageBody'}
                   placeholder={'Enter your message'}
                   validate={[required, maxLenght60]}
            />

            <button>
                Send
            </button>
        </form>
    );
};

export default Dialogs;

const AddMessageReduxForm: any = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)