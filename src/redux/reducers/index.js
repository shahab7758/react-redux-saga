import { combineReducers } from "redux";
import users from "./users";

const rootReducer = combineReducers({
    users: users

})

export default rootReducer