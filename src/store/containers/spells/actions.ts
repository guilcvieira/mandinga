import { ISpell, SpellType } from "./types";

export const loadSpellsRequest = () => ({ type: SpellType.LOAD_SPELLS_REQUEST });
export const loadSpellsSuccess = (spells: ISpell) => ({ type: SpellType.LOAD_SPELLS_SUCCESS, spells });
export const loadSpellsFailure = (error: string) => ({ type: SpellType.LOAD_SPELLS_FAILURE, error });