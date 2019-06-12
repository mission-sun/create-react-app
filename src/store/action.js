
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
        // axios.get('/index/getPCBannerList.html')
        axios.get('/index/sysPinUser/getPinUserType')
        .then((res) => {
            console.log('请求返回数据res', res);
            const action = reduxAction(res.data.data);
            dispatch(action);
        })
    }
}