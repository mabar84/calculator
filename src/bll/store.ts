import {combineReducers, createStore} from "redux";
import {calcReducer} from "./calc-reducer";
import {saveState} from "../utils/sessionStorage";

const rootReducer = combineReducers({
    calc: calcReducer
})

let preloadedState;
const persistedState = sessionStorage.getItem('app-state')
if (persistedState) {
    preloadedState = JSON.parse(persistedState)
}

export const store = createStore(
    rootReducer,
    preloadedState
);
store.subscribe(() => {
    saveState({
        calc: store.getState().calc
    });
});

export type AppStateType = ReturnType<typeof rootReducer>
