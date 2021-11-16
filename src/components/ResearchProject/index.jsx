import React, { Component } from 'react';
import { Table } from 'antd';
import projectStyles from './index.module.less'

const columns = [
    {
        title: '项目类型',
        dataIndex: 'type',
    },
    {
        title: '项目名称',
        dataIndex: 'name',
    },
    {
        title: '起止时间',
        dataIndex: 'time',
    },
];

const data = [
    {
        key: '1',
        type: '基础加强计划项目',
        name: '稀缺样本下×××目标信息智能感知',
        time: '/'
    },
    {
        key: '2',
        type: 'WJ预研项目',
        name: '智能× ××信号智能感知与识别',
        time: '/'
    },
    {
        key: '3',
        type: '航天装备部项目',
        name: '电磁× ××智能感知与识别（天智杯比赛奖励项目）',
        time: '/'
    },
    {
        key: '4',
        type: '航天装备部项目',
        name: '语义辅助的×× ××地物要素提取与变化检测技术（天智杯比赛奖励项目）',
        time: '/'
    },
    {
        key: '5',
        type: 'NSFC面上项目',
        name: '元迁移压缩感知技术',
        time: '/'
    },
    {
        key: '6',
        type: 'NSFC青年项目',
        name: '基于半监督深度学习的高光谱图像分类',
        time: '/'
    },
    {
        key: '7',
        type: '部委项目',
        name: '基于认知机理的多源异构高维数据特征抽取',
        time: '2017.05-2020.12'
    },
    {
        key: '8',
        type: '部委项目',
        name: '基于类脑智能的×××信息感知技术',
        time: '2017.10-2019.12'
    },
    {
        key: '9',
        type: '部委项目',
        name: '基于生物视觉感知与认知的特征提取与识别技术',
        time: '2017.05-2020.05'
    },
    {
        key: '10',
        type: '部委项目',
        name: '基于稀疏深度学习的信号特征提取技术研究',
        time: '2016.05-2018.05'
    },
    {
        key: '11',
        type: '部委项目',
        name: '飞行器复杂环境下目标智能辨识技术研究',
        time: '2017.01-2019.12'
    },
    {
        key: '12',
        type: '部委项目',
        name: '无线电发射设备识别与行为认知研究',
        time: '2018.01-2020.12'
    },
];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

class ResearchProject extends Component {
    render() {
        return (
            <div className={projectStyles.project}>
                <Table className={projectStyles.table} columns={columns} dataSource={data} pagination={{ defaultPageSize: 7, defaultCurrent: 1 }} onChange={onChange} />
            </div>
        );
    }
}

export default ResearchProject;