import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import ReduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

const initState = { 
	isPending: false,
	message:''
	}
const storeWithMiddleware = (createStore(rootReducer,initState, applyMiddleware(ReduxThunk)));
ReactDOM.render(
    <Provider store={storeWithMiddleware}>
        <App />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
