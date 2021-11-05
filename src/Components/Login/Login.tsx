import React from 'react';
import style from './Login.module.css'
import s from '../common/FormsControls/FormsControls.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import {connect} from "react-redux";
import {logInThunkCreator} from "../../Redux/authReducer";
import {Redirect} from "react-router-dom";
import {StateReduxType} from "../../Redux/redux-store";

type LoginPropsType = LoginStateType & {
    logInThunkCreator: (email: string, password: string, rememberMe: boolean) => void
}

export const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.logInThunkCreator(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to='/profile'/>
    }
    return (
        <div className={style.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const LoginForm: React.FunctionComponent<InjectedFormProps<FormDataType>> = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       component={Input}
                       name={'email'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       component={Input}
                       name={'password'}
                       type={'password'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type={'checkbox'}
                       component={Input}
                       name={'rememberMe'}

                />Remember me
            </div>
            { props.error && <div className={s.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'email'
})(LoginForm)
type LoginStateType = {
    isAuth: boolean
}

const mapStateToProps = (state: StateReduxType): LoginStateType => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {logInThunkCreator})(Login)
