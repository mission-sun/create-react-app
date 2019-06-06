import React, { Component } from 'react';

class Child extends Component {
    // constructor(props){
    //     super(props)
    // }
    changeContet = () => {
        console.log('this', this.props);
        const data = {'name':'you are fater'}
        this.props.getTheNewName(data);
    }
    render() {
        return (
            <div>
               <div>我是子类</div>
               <div>{ this.props.name }</div>
               <div onClick={ this.changeContet }>点击我更改子类内容</div>
            </div>
        )
    }
}
export default Child