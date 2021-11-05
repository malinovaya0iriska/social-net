import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {RootReducerType} from "../Redux/redux-store";
import {connect} from "react-redux";


type mapStateToProps = {
    isAuth: boolean
}
const mapStateToProps = (state: ReturnType<RootReducerType>): mapStateToProps => ({
    isAuth: state.auth.isAuth
})
//типизация через дженерик
//работает через function declaration
export function WithAuthRedirectComponent<T>(Component: ComponentType<T>) {

    function RedirectComponent(props: mapStateToProps) {
        let {isAuth, ...restProps} = props
        if (!props.isAuth) {
            return <Redirect to={'/login'}/>
        }
        return <Component {...restProps as T}/>
    }

    // const ConnectAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return connect(mapStateToProps)(RedirectComponent)
}
