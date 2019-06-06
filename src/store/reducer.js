const defaultState = {
    name:'reducer',
    data:'redux'
}
export default ( state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    console.log('reducer  action',action);
    switch(action.type) {
        case 'new':
        newState.name = action.value
        return newState
        default:
        return newState
    }
    return state
}