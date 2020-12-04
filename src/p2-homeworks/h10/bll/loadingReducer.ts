import {useDispatch as _useDispatch} from 'react-redux'
export enum ACTIONS{
    LOADING = 'LOADING'
}
export type ActionsType = ReturnType<typeof loadingAC>
export type LoadingReducerType = typeof initState

const initState = {
    isLoading: false
};

export const loadingReducer = (state = initState, action: ActionsType): LoadingReducerType => { // fix any
    switch (action.type) {
        case ACTIONS.LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
            }
        }
        default: return state;
    }
};


export const loadingAC = (isLoading: boolean) => ({type: ACTIONS.LOADING, isLoading} as const);

export const useDispatch = () => {
    const dispatch = _useDispatch()
    return (ac: ActionsType) => dispatch(ac)
}