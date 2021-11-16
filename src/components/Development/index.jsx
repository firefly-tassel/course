import React, { Component } from 'react';
import { Table } from 'antd';
import developStyles from './index.module.less'

const columns = [
    {
        title: '时间',
        dataIndex: 'time',
    },
    {
        title: '应用进展和新项目',
        dataIndex: 'content',
    },
];

const data = [
    {
        key: '1',
        time: '2016年1月',
        content: 'NASA进行“小行星重定向机器人任务”航天器早期设计工作'
    },
    {
        key: '2',
        time: '2016年3月',
        content: '美军推进蜂群式无人机研究，实现更高水平的决策和功能NASA利用遥控机器人建造发射-着陆台'
    },
    {
        key: '3',
        time: '2016年6月',
        content: 'AE系统公司获得“自适应雷达对抗”项目第二阶段合同美海军开发生物启发式自主感知(BIAS)项目'
    },
    {
        key: '4',
        time: '2016年7月',
        content: '美国海军陆战队测试持枪机器人。此款机器人叫模块化先进武装机器人系统(MAARS)，装有传感器和摄像头，配备M240机枪'
    },
    {
        key: '5',
        time: '2016年8月',
        content: 'DARPA启动人机协作项目——“可解释的人工智能”（XAI）'
    },
    {
        key: '6',
        time: '2016年9月',
        content: 'DARPA向工业部门寻求人工智能自适应无线电技术'
    },
    {
        key: '7',
        time: '2016年11月',
        content: '美陆军研制士兵运动自发电装备（“士兵发电”项目）'
    },
    {
        key: '8',
        time: '2017年3月',
        content: 'DARPA启动“终身学习机器”项目，重点研发先进的机器学习技术，并以其为基础推动未来人工智能发展'
    },
    {
        key: '9',
        time: '2017年4月',
        content: '美国国防部宣布成立“算法跨职能小组”，统一领导美军“算法战”相关军事装备技术研究'
    },
    {
        key: '10',
        time: '2017年5月',
        content: '美国国防部设立新机构---“算法战”跨职能小组，开发出首批4套智能算法'
    },
    {
        key: '11',
        time: '2017年6月',
        content: '美空军研究实验室在64芯片阵列“真北”神经元系统的基础上开发类脑超算系统'
    },
    {
        key: '12',
        time: '2017年7月',
        content: '美空军F-35开始采用计算机算法和初级版本的人工智能（AI），能够在不需要人工干预的情况下运行，改变以往需要人工操作的武器平台'
    },
    {
        key: '13',
        time: '2017年9月',
        content: '美国陆军后勤保障局（LOGSA）引进IBM公司的人工智能产品“沃森”，集成新的人工智能、云能力'
    },
    {
        key: '14',
        time: '2017年12月',
        content: 'DARPA研发并试验人工智能芯片，试图利用该芯片，治疗士兵的创伤后精神失调，改善士兵的情绪'
    },
];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

class ResearchProject extends Component {
    render() {
        return (
            <div className={developStyles.development}>
                <Table className={developStyles.table} columns={columns} dataSource={data} pagination={{ defaultPageSize: 7, defaultCurrent: 1 }} onChange={onChange} />
            </div>
        );
    }
}

export default ResearchProject;