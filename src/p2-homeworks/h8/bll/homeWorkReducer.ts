import {UserType} from "../HW8";

const SORT_UP ='SORT_UP'
const SORT_DOWN ='SORT_DOWN'

export const homeWorkReducer = (state:  Array<UserType>, action: any): any => {
    switch (action.type) {
        case SORT_UP: {

            return [...state.sort((a,b)=> a.age - b.age)]
        }
        case SORT_DOWN: {

            return [...state.sort((a,b)=> a.age - b.age).reverse()]
        }
        case "check": {

            return state
        }
        default: return state
    }
};
