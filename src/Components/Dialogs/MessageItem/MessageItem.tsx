import {MessageType} from "../../../Redux/dialogsReducer";


export const MessageItem = (props: MessageType) => {

    return <li key={props.id}>{props.message}</li>
}