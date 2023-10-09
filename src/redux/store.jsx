import { applyMiddleware, createStore } from 'redux';
import InventoryManagementReducer from './reducer';
import thunk from 'redux-thunk';

const store = createStore(InventoryManagementReducer, applyMiddleware(thunk));

export default store;
