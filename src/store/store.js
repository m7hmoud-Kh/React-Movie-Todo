import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import combinReducers from "../reducer/combinReducers";

const MyStore = createStore(combinReducers, composeWithDevTools())

export default MyStore;