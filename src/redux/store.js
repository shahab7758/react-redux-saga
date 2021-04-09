import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";


const sagaMiddleware = createSagaMiddleware()

const store = compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension()
)(createStore)(rootReducer)

sagaMiddleware.run(rootSaga)

export default store