import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeRdeux } from './store/action'

class Goods extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        console.log('this.props', this.props)
        const { name, data } = this.props.newState
        const { changeReduxData }  = this.props
        return (
            <div>我是react-redux相关的内容
                <p>我是名字{name}我是内容{data}</p>
                <p onClick={ changeReduxData }>改变数据</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('props', state)
    return {
        newState: state
    }

}
// return 中的函数其实都是映射到this.props 中去了
// 又因为我们获取到dispath 所以可以放到这里
const mapDispathProps = (dispatch) => {
    return {
        changeReduxData() {
            const action = changeRdeux();
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispathProps)(Goods)