import { createStore, applyMiddleware, combineReducers  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import reducer from './reducer'
import goodsReducer from './goodReducer'

const rootReducer = combineReducers({reducer, goodsReducer})

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
));
export default store