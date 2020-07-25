import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { flight } from './components/reducers/flight';

const enhancers = [];
const devToolsExtension = window.devToolsExtension;
if(typeof devToolsExtension === 'function'){
    enhancers.push(devToolsExtension());
}

const composedEnhancer = compose(
    applyMiddleware(thunk),
    ...enhancers

);
export const store = createStore(flight, composedEnhancer);