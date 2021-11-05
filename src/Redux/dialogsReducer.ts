import {v1} from "uuid";
import {ActionsTypeFromRootReducer} from "./redux-store";


export type DialogsPageType = {
    authorsOfMessage: Array<authorsOfMessageType>
    messages: Array<MessageType>
}
export type authorsOfMessageType = {
    id: string
    name: string
    avatar: string
}
export type MessageType = {
    id: string
    message: string
}

let initialState: DialogsPageType = {
    authorsOfMessage: [
        {
            id: v1(),
            name: 'Nastya',
            avatar: 'https://www.cnet.com/a/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg'
        },
        {
            id: v1(),
            name: 'Natalya',
            avatar: 'https://www.cnet.com/a/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg'
        },
        {
            id: v1(),
            name: 'Alex',
            avatar: 'https://www.cnet.com/a/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg'
        },
        {
            id: v1(),
            name: 'Arina',
            avatar: 'https://www.cnet.com/a/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg'
        }
    ],
    messages: [
        {id: v1(), message: 'Bla-bla'},
        {id: v1(), message: 'Hello'},
        {id: v1(), message: 'What\'s up?'},
        {id: v1(), message: 'I\'ll pass'}
    ],

}
export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypeFromRootReducer): DialogsPageType => {// type:'ADD-POST'

    switch (action.type) {
        case 'ADD-NEW-MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: action.newMessage}],
            }
        default:
            return state
    }
}

export const AddNewMessageAC = (newMessage: string) => {
    return {
        type: 'ADD-NEW-MESSAGE',
        newMessage
    } as const
}