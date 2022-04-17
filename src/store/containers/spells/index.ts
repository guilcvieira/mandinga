import { SpellState, SpellType } from "./types";
import { Reducer } from "redux";

const initialState: SpellState = {
    spells: [],
    loading: false,
    error: "",
}

const reducer: Reducer = (state: SpellState = initialState, action): SpellState => {
    switch (action.type) {
        case SpellType.LOAD_SPELLS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SpellType.LOAD_SPELLS_SUCCESS:
            return {
                ...state,
                loading: false,
                spells: action.spells,
            };
        case SpellType.LOAD_SPELLS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
}

export default reducer;