import React, { Component } from 'react';
import * as echarts from 'echarts/core';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import companyStyles from './index.module.less'

echarts.use([
    TooltipComponent,
    LegendComponent,
    PieChart,
    CanvasRenderer,
    LabelLayout
]);

class Cooperator extends Component {

    componentDidMount() {
        var chartDom = document.getElementById('bar');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '来自',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 54, name: '中电' },
                        { value: 28, name: '中电' },
                        { value: 57, name: '总参' },
                        { value: 56, name: '总参' },
                        { value: 25, name: '航天二院' },
                        { value: 23, name: '航天二院' },
                        { value: 17, name: '航天四院' },
                        { value: 25, name: '航天五院钱学森实验室' }
                    ]
                }
            ]
        };

        option && myChart.setOption(option);

    }

    render() {
        return (
            <div className={companyStyles.company}>
                <div id="bar" className={companyStyles.bar}></div>
            </div>
        );
    }
}

export default Cooperator;
