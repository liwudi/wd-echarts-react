/**
 * Created by mapbar_front on 2018/10/11
 */
import React, { Component } from 'react';
import Echarts from 'echarts';
import { clear, bind } from 'size-sensor';

class WdEchartsReact extends Component{
    constructor(props){
        super(props);
        this.dom = null;
    }
    componentDidMount() {
        this.reRenderCharts();
    }
    reRenderCharts() {
        this.myChart = this.getEchartsInstance();
        this.myChart.setOption(this.props.options);
        if (this.dom) {
            bind(this.dom, () => {
                this.myChart.resize();
            })
        }
    }
    getEchartsInstance() {
        const echartInstance = Echarts.getInstanceByDom(this.dom) || Echarts.init(this.dom);
        return echartInstance;
    }
    disposeCharts() {
        if (this.dom) {
            try {
                clear(this.dom)
            } catch (e) {
                console.warn(e);
            }
        }
        this.myChart && this.myChart.dispose();
    }
    componentWillUnmount() {
        this.disposeCharts();
    }

    render() {
        return (
            <div style={{ width: '100%', height: '100%' }} ref={dom => this.dom = dom }>

            </div>
        );
    }
}

module.exports = WdEchartsReact;
