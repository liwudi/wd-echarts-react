/**
 * Created by mapbar_front on 2018/10/11
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WdEchartsReact from './WdEchartsReact';

const options = {
    title: {
        text: '用户访问趋势图'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
}
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }
    // 加1
    increase() {
        let self = this;
        self.setState({ number: self.state.number + 1 })
    }
    // 减一
    decrease() {
        let self = this;
        self.setState({ number: self.state.number - 1 })

    }


    render() {
        return (
            <div className='wrap'>
                <WdEchartsReact options={options}></WdEchartsReact>
            </div>
        )
    }
}

ReactDOM.render(<Counter /> , document.getElementById('root'))
