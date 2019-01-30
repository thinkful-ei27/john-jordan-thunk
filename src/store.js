import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {characterReducer} from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default createStore(
    characterReducer,
    composeEnhancers(applyMiddleware(thunk))
);
