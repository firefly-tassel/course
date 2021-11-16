import React, { Component } from 'react';
import { Image } from 'antd'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import modulate1 from '../../assets/images/modulate1.png'
import modulate2 from '../../assets/images/modulate2.png'
import modulate3 from '../../assets/images/modulate3.png'
import modulate4 from '../../assets/images/modulate4.png'
import modulate5 from '../../assets/images/modulate5.png'
import modulate6 from '../../assets/images/modulate6.png'
import modulate7 from '../../assets/images/modulate7.png'
import modulateStyles from './index.module.less'

class SignalModulate extends Component {
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
            <div className={modulateStyles.modulate}>
                <div className={modulateStyles.card}>
                    {current === 1 ? <LeftCircleOutlined className={modulateStyles.noleft} style={{ fontSize: '5rem' }} /> :
                        <LeftCircleOutlined className={modulateStyles.left} style={{ fontSize: '5rem' }} onClick={this.prev} />
                    }
                    <div className={modulateStyles.content}>
                        <div className={modulateStyles.content1} style={{ display: current === 1 ? 'block' : 'none' }}>
                            <div className={modulateStyles.img}>
                                <Image
                                    className={modulateStyles.ant_img}
                                    src={modulate1}
                                    preview={{
                                        src: modulate1,
                                    }}
                                />
                            </div>
                            <p className={modulateStyles.text}>RadioML 2016.10b数据集作为本方法研究的输入数据。该数据集包含11种调制类型：8种数字调制和3种模拟调制。这些包括用于数字调制的BPSK，QPSK，8PSK，QAM16，QAM64，GFSK，CPFSK和PAM4，以及用于模拟调制的WBFM，AM-SSB和AM-DSB。</p>
                        </div>
                        <div className={modulateStyles.content2} style={{ display: current === 2 ? 'block' : 'none' }}>
                            <div className={modulateStyles.img}>
                                <Image
                                    src={modulate2}
                                    className={modulateStyles.ant_img}
                                    preview={{
                                        src: modulate2,
                                    }}
                                />
                            </div>
                            <div className={modulateStyles.text}>一些信号在信噪比-6dB下的WV(Wigner一Ville)分布投影图</div>
                        </div>
                        <div className={modulateStyles.content3} style={{ display: current === 3 ? 'block' : 'none' }}>
                            <div className={modulateStyles.img}>
                                <Image
                                    src={modulate3}
                                    className={modulateStyles.ant_img}
                                    preview={{
                                        src: modulate3,
                                    }}
                                />
                            </div>
                        </div>
                        <div className={modulateStyles.content4} style={{ display: current === 4 ? 'block' : 'none' }}>
                            <div className={modulateStyles.img}>
                                <Image
                                    src={modulate4}
                                    className={modulateStyles.ant_img}
                                    preview={{
                                        src: modulate4,
                                    }}
                                />
                            </div>
                        </div>
                        <div className={modulateStyles.content5} style={{ display: current === 5 ? 'block' : 'none' }}>
                            <div className={modulateStyles.img}>
                                <Image
                                    src={modulate5}
                                    className={modulateStyles.ant_img}
                                    preview={{
                                        src: modulate5,
                                    }}
                                />
                            </div>
                            <div className={modulateStyles.text}>深度神经网络所提取的特征不仅具有普适性，对噪声和频偏也有较强的鲁棒性</div>
                        </div>
                        <div className={modulateStyles.content6} style={{ display: current === 6 ? 'block' : 'none' }}>
                        <div className={modulateStyles.img}>
                                <Image
                                    src={modulate6}
                                    className={modulateStyles.ant_img}
                                    preview={{
                                        src: modulate6,
                                    }}
                                />
                            </div>
                            <p className={modulateStyles.text}>与几种深度神经网络模型的对比：最上方红线代表所设计的网络的准确率。本方法在[-20,+18]dB上表现均优于其他几类现有的网络，在+18dB下取得了92.8%的结果，优于densenet的88.5%，体现了本方法的有效性。</p>
                        </div>
                        <div className={modulateStyles.content7} style={{ display: current === 7 ? 'block' : 'none' }}>
                            <div className={modulateStyles.img}>
                                <Image
                                    src={modulate7}
                                    className={modulateStyles.ant_img}
                                    preview={{
                                        src: modulate7,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {current === 7 ? <RightCircleOutlined className={modulateStyles.noright} style={{ fontSize: '5rem' }} /> : <RightCircleOutlined className={modulateStyles.right} style={{ fontSize: '5rem' }} onClick={this.next} />}
                    <span className={modulateStyles.num}>{current}/7</span>
                </div>
            </div>
        );
    }
}

export default SignalModulate;