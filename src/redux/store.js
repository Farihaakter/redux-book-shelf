import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import bookReducer from "./reducers/bookReducer";
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const rootReducer = combineReducers({
    books: bookReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(middleware))