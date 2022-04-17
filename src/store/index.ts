import { applyMiddleware, compose, createStore, Store } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./containers/rootReducer";
import { SpellState } from "./containers/spells/types";

export interface ApplicationState {
    spells: SpellState;
}

const store: Store<ApplicationState> = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;