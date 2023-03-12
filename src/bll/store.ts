import {combineReducers, createStore} from "redux";
import {calcReducer} from "./calc-reducer";
import {saveState} from "../utils/localStorage";

const rootReducer = combineReducers({
    counter: calcReducer
})

let preloadedState;
const persistedState = localStorage.getItem('app-state')
if (persistedState) {
    preloadedState = JSON.parse(persistedState)
}

export const store = createStore(
    rootReducer,
    preloadedState
);
store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    });
});

export type AppStateType = ReturnType<typeof rootReducer>
