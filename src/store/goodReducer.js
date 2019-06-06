const defaultState = {
    name:'goods-reducer',
    value:'这是一个随意的值'
}

export default (state = defaultState, action) => {
    console.log('action', action);
    return state
}