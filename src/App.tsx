import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {Route, withRouter} from 'react-router-dom';
import {MyFriends} from "./Components/MyFriends/MyFriends";
import {MyPhoto} from "./Components/MyPhoto/MyPhoto";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {ProfileContainer} from "./Components/Profile/ProfileContainer";
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import React, {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {setInitializedThunkCreator} from "./Redux/appReducer";
import {StateReduxType} from "./Redux/redux-store";
import {Preloader} from "./Components/common/Preloader/Preloader";

type AppPropsType = {
    initialized: boolean
    setInitializedThunkCreator: () => void
}

class App extends Component<AppPropsType> {
    componentDidMount() {
        this.props.setInitializedThunkCreator()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='appWrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-Wrapper-Content'>
                    <Route path='/login'
                           render={() => <Login/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/my_friends' render={() => <MyFriends/>}/>
                    <Route path='/my_photo' render={() => <MyPhoto/>}/>

                </div>
            </div>
        );
    }
}

const mapAppStateToProps = (state: StateReduxType) => ({initialized: state.app.initialized})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapAppStateToProps, {
        setInitializedThunkCreator,
    }))(App);
