import {UserType} from "../HW8"

    const SORT ='SORT'

export const homeWorkReducer = (state:  Array<UserType>, action: any): any => {
    switch (action.type) {
        case SORT:
           {
                if (action.payload === 'up') {
                    return [...state.sort((a,b)=> a.age - b.age)]
                } else if (action.payload === 'down'){
                    return [...state.sort((a,b)=> a.age - b.age).reverse()]
                } else if (action.payload === 'name-up'){
                    return [...state.sort(function (a, b) {
                        if (a.name > b.name) {
                            return 1
                        }
                        if (a.name < b.name) {
                            return -1
                        }
                        return 0
                    })]
                }else if (action.payload === 'name-down'){
                    return [...state.sort(function (a, b) {
                        if (a.name < b.name) {
                            return 1
                        }
                        if (a.name > b.name) {
                            return -1
                        }
                        return 0
                    })]
                }else {
                    return state
                }
            }

        case "CHECK_18": {
            return [...state.filter(u => u.age > action.payload)]
        }
        default: return state
    }
};
