
// 正常来说 action只能返回一个对象
// 对于返回函数，只能借助redux-thunk

import axios from 'axios'

// export const reduxAction = (data) => {
//     return {
//         type:'async',
//         value: data
//     }
// }
// 对上边的代码进行简化, 在大括号外边增加一个小括号就行了
export const reduxAction = (data) => ({
    type:'async',
    value: data
})
export function changeRdeux () {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5b45a08018ceb55f228258a2/example/easymock#!method=get')
        .then((res) => {
            const action = reduxAction(res.data.data);
            dispatch(action);
        })
    }
}