import React, { Component } from 'react';
import { Image, Table, Pagination } from 'antd';
import generate1 from '../../assets/images/generate1.png'
import generate2 from '../../assets/images/generate2.png'
import true1 from '../../assets/images/true1.png'
import false1 from '../../assets/images/false1.png'
import true2 from '../../assets/images/true2.png'
import false2 from '../../assets/images/false2.png'
import true3 from '../../assets/images/true3.png'
import false3 from '../../assets/images/false3.png'
import true4 from '../../assets/images/true4.png'
import false4 from '../../assets/images/false4.png'
import generateStyles from './index.module.less'

const columns = [
    {
        title: '序号',
        dataIndex: 'index',
    },
    {
        title: '项目名称',
        dataIndex: 'name',
    },
    {
        title: 'BN',
        dataIndex: 'bn',
    },
    {
        title: 'activation',
        dataIndex: 'activation',
    },
];

const data = [
    {
        key: '1',
        index: '0',
        name: '输入噪声',
        bn: '',
        activation: 'relu'
    },
    {
        key: '2',
        index: '1',
        name: 'fully_connected',
        bn: '',
        activation: 'relu'
    },
    {
        key: '3',
        index: '2',
        name: 'transposed_convolution_1',
        bn: '',
        activation: 'relu'
    },
    {
        key: '4',
        index: '3',
        name: 'transposed_convolution_2',
        bn: '',
        activation: 'relu'
    },
    {
        key: '5',
        index: '4',
        name: 'transposed_convolution_3',
        bn: '',
        activation: 'relu'
    },
    {
        key: '6',
        index: '5',
        name: 'transposed_convolution_4',
        bn: '',
        activation: 'tanh'
    },
];

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

class SignalGenerate extends Component {

    state = {
        current: 1,
    };

    onChange = page => {
        console.log(page);
        this.setState({
            current: page,
        });
    };

    render() {
        const { current } = this.state;
        return (
            <div className={generateStyles.generate}>
                <div className={generateStyles.card}>
                    <div className={generateStyles.left}>
                        <p className={generateStyles.text}>
                            使用一维卷积结构设计生成器与判别器，设计新的Wasserstein距离作为损失函数，生成的256点AM信号如下图：与仿真信号比较一致。
                        </p>
                        <h3 className={generateStyles.title}>生成器网络结构</h3>
                        <Table className={generateStyles.table} size="small" columns={columns} dataSource={data} pagination={false} onChange={onChange} />
                        <div className={generateStyles.imgs}>
                            <div className={generateStyles.img}>
                                <Image
                                    src={generate1}
                                    className={generateStyles.ant_img}
                                    preview={{
                                        src: generate1,
                                    }}
                                />
                            </div>
                            <div className={generateStyles.img}>
                                <Image
                                    src={generate2}
                                    className={generateStyles.ant_img}
                                    preview={{
                                        src: generate2,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={generateStyles.gap}></div>
                    <div className={generateStyles.right}>
                        <p className={generateStyles.text}>
                            选择四类电台信号进行对比，每组左侧为真实数据集信号，右侧为生成信号。
                        </p>
                        <span className={generateStyles.label1}>真</span><span className={generateStyles.label2}>假</span>
                        <div className={generateStyles.page} style={{display: current===1 ? 'block' : 'none'}}>
                            <div className={generateStyles.imgs}>
                                <div className={generateStyles.img}>
                                    <Image
                                        src={true1}
                                        className={generateStyles.ant_img}
                                        preview={{
                                            src: true1,
                                        }}
                                    />
                                </div>
                                <div className={generateStyles.img}>
                                    <Image
                                        src={false1}
                                        className={generateStyles.ant_img}
                                        preview={{
                                            src: false1,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={generateStyles.imgs}>
                                <div className={generateStyles.img}>
                                    <Image
                                        src={true2}
                                        className={generateStyles.ant_img}
                                        preview={{
                                            src: true2,
                                        }}
                                    />
                                </div>
                                <div className={generateStyles.img}>
                                    <Image
                                        src={false2}
                                        className={generateStyles.ant_img}
                                        preview={{
                                            src: false2,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={generateStyles.page} style={{display: current===2 ? 'block' : 'none'}}>
                            <div className={generateStyles.imgs}>
                                <div className={generateStyles.img}>
                                    <Image
                                        src={true3}
                                        className={generateStyles.ant_img}
                                        preview={{
                                            src: true3,
                                        }}
                                    />
                                </div>
                                <div className={generateStyles.img}>
                                    <Image
                                        src={false3}
                                        className={generateStyles.ant_img}
                                        preview={{
                                            src: false3,
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={generateStyles.imgs}>
                                <div className={generateStyles.img}>
                                    <Image
                                        src={true4}
                                        className={generateStyles.ant_img}
                                        preview={{
                                            src: true4,
                                        }}
                                    />
                                </div>
                                <div className={generateStyles.img}>
                                    <Image
                                        src={false4}
                                        className={generateStyles.ant_img}
                                        preview={{
                                            src: false4,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <Pagination className={generateStyles.pagination} current={current} onChange={this.onChange} total={20} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignalGenerate;