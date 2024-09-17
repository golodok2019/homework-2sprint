const initState: StateType = {
    isLoading: false,
}

export type StateType = {
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: LoadingActionType): StateType  => {
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {isLoading: action.isLoading}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
