

export const getToken = () => {
    const persistedState = localStorage.getItem('persist:root');
    if (persistedState) {
    const parsedState = JSON.parse(persistedState);
    const auth = JSON.parse(parsedState.auth)
    return auth.token || ''
}
}