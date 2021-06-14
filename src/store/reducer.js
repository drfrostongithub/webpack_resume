const initialState = {
    page: "main"
}

const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type){
        case "SET_PAGE":
        newState.page = action.value
        break;
    }
    return newState
}

export default reducer