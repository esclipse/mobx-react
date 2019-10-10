import React from 'react'
import ReactDOM from 'react-dom'
import {observer, inject} from 'mobx-react';
 
// 观察者
@inject('test') 
@observer
class DemoComponent extends React.Component {
    constructor(props) {
        super(props);
    }
 
    render() {
        const { test } = this.props;
        return (
            <div>
                <p>{test.name}</p>
            </div>
        );
    }
}
 
ReactDOM.render(document.querySelector('#root'), <DemoComponent />);
