import {AddNewMessageAC, DialogsPageType} from "../../Redux/dialogsReducer";
import {StateReduxType} from "../../Redux/redux-store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {WithAuthRedirectComponent} from "../../hoc/WitAuthRedirect";
import React from "react";

export type mapStateToPropsType = {
    dialogsPage: DialogsPageType
}
export type mapDispatchToPropsType = {
    onAddNewMessage: (text: string) => void
}
const mapStateToProps = (state: StateReduxType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onAddNewMessage: (newMessage: string) => {
            dispatch(AddNewMessageAC(newMessage))
        },
    }
};
// один вариант синтаксиса, напрямую прокинуть коннект в HOC, второй смотри в ProfileContainer
/*
export const DialogsContainer = WithAuthRedirectComponent(connect(mapStateToProps, mapDispatchToProps)(Dialogs))*/

export const DialogsContainer = compose<React.ComponentType>(
    WithAuthRedirectComponent,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)