export const toggleTheme = (msg: string) => ({
    type:'TOGGLE_THEME',
    payload:msg
})

export const updateMessage = (msg: string) => ({
    type:'UPDATE_MESSAGE',
    payload:msg
})