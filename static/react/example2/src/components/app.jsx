import React, { Component } from 'react';

class App extends Component {
    render(){
        return (
            <Parent />
        );
    }
}

// 부모 컴포넌트
class Parent extends Component {
    render(){
        return (
            <ul>
                <Child name="apple" value="100원"/>
                <Child name="banana" value="50원"/>
                <Child name="파인애플" value="공짜"/>
                <Child name="수박" value="5000원"/>
                <Child name="메론" value="10000원"/>
            </ul>
        );
    }
}

// 자식 컴포넌트
class Child extends Component {
    render() {
        return (
            <li>
                {this.props.name} : {this.props.value}
            </li>
        );
    }
}

export default App;