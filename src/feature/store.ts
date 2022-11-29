import { configureStore,combineReducers } from '@reduxjs/toolkit'
import AppReducer from './appReducer';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({AppReducer});

const store = configureStore({
    reducer:rootReducer,
    devTools:true
})

export default store;