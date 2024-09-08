import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            switch(action.payload)
            {
                case 'down':
                    return [...state].sort((a,b) => b.name.localeCompare(a.name))
                case 'up':
                    return [...state].sort((a,b) => a.name.localeCompare(b.name))
                default:
                    return state
            }
        }
        case 'check': {
            return state.filter(u => u.age >= action.payload)
        }
        default:
            return state
    }
}
