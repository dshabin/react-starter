import React from 'react';
import ReactDOM from 'react-dom';
import './theme/index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import reducers from './_reducers/reducerRoot';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <StylesProvider jss={jss}>
            <App />
        </StylesProvider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
