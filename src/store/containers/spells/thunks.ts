import { Dispatch } from "redux";
import { SpellType } from "./types";

const SpellsThunks = {
    getSpells: () => (dispatch: Dispatch) => {
        dispatch({
            type: SpellType.LOAD_SPELLS_REQUEST,
        });
        const spells = [
            {
                name: "Fireball",
                cost: 1,
                types: ["Fire"],
                keywords: ["Area", "Damage"],
                magic_equivalence: "2",
                description: "A fire ball that does 2 damage to all enemies in a 3x3 area.",
            },
        ]

        dispatch({
            type: SpellType.LOAD_SPELLS_SUCCESS,
            spells,
        });

        // fetch("https://localhost:44316/api/spells")
        //     .then(response => response.json())
        //     .then(spells => {
        //         dispatch({
        //             type: SpellType.LOAD_SPELLS_SUCCESS,
        //             spells,
        //         });
        //     })
        //     .catch(error => {
        //         dispatch({
        //             type: SpellType.LOAD_SPELLS_FAILURE,
        //             error,
        //         });
        //     });
    }
}

export default SpellsThunks;