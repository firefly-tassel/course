import React, { Component } from 'react';
import { Image } from 'antd'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import radiation1 from '../../assets/images/radiation1.png'
import radiation2 from '../../assets/images/radiation2.png'
import radiation3 from '../../assets/images/radiation3.png'
import radiation4 from '../../assets/images/radiation4.png'
import radiation5 from '../../assets/images/radiation5.png'
import radiation6 from '../../assets/images/radiation6.png'
import radiation7 from '../../assets/images/radiation7.png'
import radiation8 from '../../assets/images/radiation8.png'
import radiation9 from '../../assets/images/radiation9.png'
import radiationStyles from './index.module.less'

class Radiation extends Component {
    state = {
        current: 1
    }

    prev = () => {
        this.setState({ current: this.state.current - 1 });
    }
    next = () => {
        this.setState({ current: this.state.current + 1 });
    }

    render() {
        const { current } = this.state;
        return (
            <div className={radiationStyles.radiation}>
                {current === 1 ? <LeftCircleOutlined className={radiationStyles.noleft} style={{ fontSize: '5rem' }} /> :
                    <LeftCircleOutlined className={radiationStyles.left} style={{ fontSize: '5rem' }} onClick={this.prev} />
                }
                <div className={radiationStyles.content}>
                    <div className={radiationStyles.content1} style={{ display: current === 1 ? 'block' : 'none' }}>
                        <div className={radiationStyles.img}>
                            <Image
                                src={radiation1}
                                className={radiationStyles.ant_img}
                                preview={{
                                    src: radiation1,
                                }}
                            />
                        </div>
                    </div>
                    <div className={radiationStyles.content2} style={{ display: current === 2 ? 'block' : 'none' }}>
                        <div className={radiationStyles.img}>
                            <Image
                                src={radiation2}
                                className={radiationStyles.ant_img}
                                preview={{
                                    src: radiation2,
                                }}
                            />
                        </div>
                    </div>
                    <div className={radiationStyles.content3} style={{ display: current === 3 ? 'block' : 'none' }}>
                        <div className={radiationStyles.img}>
                            <Image
                                src={radiation3}
                                className={radiationStyles.ant_img}
                                preview={{
                                    src: radiation3,
                                }}
                            />
                        </div>
                    </div>
                    <div className={radiationStyles.content4} style={{ display: current === 4 ? 'block' : 'none' }}>
                        <div className={radiationStyles.img}>
                            <Image
                                src={radiation4}
                                className={radiationStyles.ant_img}
                                preview={{
                                    src: radiation4,
                                }}
                            />
                        </div>
                        <p className={radiationStyles.text}>模型对于1810、1815、1821电台识别错误率较高，其中1810被误判为1821、1815被误判为1809和1235和1821被误判为1810的错误情况较多。</p>
                    </div>
                    <div className={radiationStyles.content5} style={{ display: current === 5 ? 'block' : 'none' }}>
                        <div className={radiationStyles.img}>
                            <Image
                                src={radiation5}
                                className={radiationStyles.ant_img}
                                preview={{
                                    src: radiation5,
                                }}
                            />
                        </div>
                    </div>
                    <div className={radiationStyles.content6} style={{ display: current === 6 ? 'block' : 'none' }}>
                        <div className={radiationStyles.img}>
                            <Image
                                src={radiation6}
                                className={radiationStyles.ant_img}
                                preview={{
                                    src: radiation6,
                                }}
                            />
                        </div>
                    </div>
                    <div className={radiationStyles.content7} style={{ display: current === 7 ? 'block' : 'none' }}>
                        <div className={radiationStyles.img}>
                            <Image
                                src={radiation7}
                                className={radiationStyles.ant_img}
                                preview={{
                                    src: radiation7,
                                }}
                            />
                        </div>
                        <p className={radiationStyles.text}>采集三组电台数据，网络先训练后进行测试。将第一层全连接层的输出(功能层的输入)进行可视化，研究模型所提取特征的判别性。</p>
                    </div>
                    <div className={radiationStyles.content8} style={{ display: current === 8 ? 'block' : 'none' }}>
                        <div className={radiationStyles.img}>
                            <Image
                                src={radiation8}
                                className={radiationStyles.ant_img}
                                preview={{
                                    src: radiation8,
                                }}
                            />
                        </div>
                        <p className={radiationStyles.text}>用每类电台数据中随机取1000条，两两计算类内距离和类间距离。将距离输出结果按从大到小排序，画曲线图。其中距离计算方式为余弦相似度。红线为模型输出值的类内距离，蓝线模型输出值的为类间距离。绿线为原始信号类内距离，黄线为原始信号类间距离。</p>
                    </div>
                    <div className={radiationStyles.content9} style={{ display: current === 9 ? 'block' : 'none' }}>
                        <div className={radiationStyles.img}>
                            <Image
                                src={radiation9}
                                className={radiationStyles.ant_img}
                                preview={{
                                    src: radiation9,
                                }}
                            />
                        </div>
                        <p className={radiationStyles.text}>图中为在TX2平台上运行电台分类的一个神经网络所得到的结果，该网络实现了对五个电台信号的准确分类，分类的准确率达到了99.6%，与相同模型在服务器上测试的准确率相同，在服务器上所用时间为1.5s，在嵌入式TX2上所用时间为7.46s。</p>
                    </div>
                </div>
                {current === 9 ? <RightCircleOutlined className={radiationStyles.noright} style={{ fontSize: '5rem' }} /> : <RightCircleOutlined className={radiationStyles.right} style={{ fontSize: '5rem' }} onClick={this.next} />}
                <span className={radiationStyles.num}>{current}/9</span>
            </div>
        );
    }
}

export default Radiation;