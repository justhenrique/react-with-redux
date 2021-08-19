import students from "./students";
import lessons from "./lessons";

const reducer = Redux.combineReducers({ students, lessons });

const store = Redux.createStore(reducer);

export default store;
