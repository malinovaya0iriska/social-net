//import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import {storeRedux} from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from 'react-redux'

export const reRenderEntireTree = () => {

    ReactDOM.render(<BrowserRouter>
        <Provider store={storeRedux}>
            <App />
        </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}

reRenderEntireTree() // start render

storeRedux.subscribe(()=> {

    reRenderEntireTree()
}) // render after upgrade




