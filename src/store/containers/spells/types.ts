
export enum SpellType {
    LOAD_SPELLS_REQUEST = 'LOAD_SPELLS_REQUEST',
    LOAD_SPELLS_SUCCESS = 'LOAD_SPELLS_SUCCESS',
    LOAD_SPELLS_FAILURE = 'LOAD_SPELLS_FAILURE',
}

export interface ISpell {
    name: string,
    cost: number,
    types: string[],
    keywords: string[],
    magic_equivalence: string,
    description: string,
}

export interface SpellState {
    readonly spells: ISpell[],
    readonly loading: boolean,
    readonly error: string,
}