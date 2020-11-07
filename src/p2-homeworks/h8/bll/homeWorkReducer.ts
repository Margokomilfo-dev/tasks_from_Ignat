import {UserType} from "../HW8"

const SORT_UP ='SORT_UP'
const SORT_DOWN ='SORT_DOWN'
const SORT_NAME_UP ='SORT_NAME_UP'
const SORT_NAME_DOWN ='SORT_NAME_DOWN'

export const homeWorkReducer = (state:  Array<UserType>, action: any): any => {
    switch (action.type) {
        case SORT_UP: {
            return [...state.sort((a,b)=> a.age - b.age)]
        }
        case SORT_DOWN: {
            return [...state.sort((a,b)=> a.age - b.age).reverse()]
        }
        case SORT_NAME_UP: {
            //return [...state.map(u => u.name).sort()]
            return [...state.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1
                }
                if (a.name < b.name) {
                    return -1
                }
                return 0
            })]
        }
        case SORT_NAME_DOWN: {
            //return [...state.map(u => u.name).sort().reverse()]
            return [...state.sort(function (a, b) {
                if (a.name < b.name) {
                    return 1
                }
                if (a.name > b.name) {
                    return -1
                }
                return 0
            })]
        }
        case "CHECK_18": {
            return [...state.filter(u => u.age > action.payload)]
        }
        default: return state
    }
};
