const initialState = {
    page: "main",
    history: []
}

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type){
        case "SET_PAGE":
        // newState.page = action.value
        return {
            ...state,
            page: action.value,
            history: state.history.concat({page:action.value})
        }
        break;
    }
    return newState
}

export default reducer