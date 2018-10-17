
export function UserReducer(
    initialState = {},
    action
) {
    if (action.type === "USER_LOGOUT" || action.type === "AUTH_FAILED") {

    }

    if (action.type === "FETCH_USER_COMPLETED") {
        return {...initialState, ...action.myDetails}
    }
    return {...initialState}
}