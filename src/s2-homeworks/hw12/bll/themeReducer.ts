const initState: ThemeStateType = {
    themeId: 1,
}

type ChangeThemeIdAT = {
    type: 'SET_THEME_ID'
    id: number
}

type ThemeStateType = {
    themeId : number
}

export const themeReducer = (state = initState, action: ChangeThemeIdAT): ThemeStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return { themeId:action.id }

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdAT => ({ type: 'SET_THEME_ID', id }) // fix any
