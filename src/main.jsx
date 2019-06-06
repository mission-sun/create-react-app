import React, { Component } from 'react';

import Child from './Components/child';

function Welcome (props) {
    return (
        <div>
            <div>{props.name}</div>
            <div> 通过我点击改变内容</div>
        </div>
    )
}

const Welcome1 = () =>{
    return (
        <div>我是es6封装的组件</div>
    )
}


class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'you are child'
        }
    }
    handleClick = () => {
        console.log('this', this);
    }
    changeName = (data) => {
        this.setState({
            name: data.name
        })
    }
    render() {
        return (
            <div>
                <div>这是Main</div>
                <Welcome name="fater" />
                <Welcome1 />
                <Child name={this.state.name} getTheNewName={this.changeName}/>
            </div>
        )
    }
}
export default Main