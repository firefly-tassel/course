import React, { Component } from 'react';
import { Image } from 'antd';
import process1 from '../../assets/images/process1.png'
import process2 from '../../assets/images/process2.png'
import processStyles from './index.module.less'

class SignalProcess extends Component {
    render() {
        return (
            <div className={processStyles.process}>
                <div className={processStyles.card}>
                    <div className={processStyles.left}>
                        <h2 className={processStyles.title}>1.宽带信号智能识别处理系统</h2>
                        <p className={processStyles.text}>
                            研制的宽带信号智能识别处理系统在开放、动态、复杂的实际电磁环境下，对莫尔斯、FSK、PSK、话音和其余信号的识别准确率和检测召回率均达90%以上，并实现了信号关键参数的估计。
                        </p>
                        <div className={processStyles.img}>
                            <Image
                                src={process1}
                                className={processStyles.ant_img}
                                preview={{
                                    src: process1,
                                }}
                            />
                        </div>
                    </div>
                    <div className={processStyles.gap}></div>
                    <div className={processStyles.right}>
                        <h2 className={processStyles.title}>2.通信目标智能化识别与对抗系统</h2>
                        <p className={processStyles.text}>
                            研制的通信目标智能化识别与对抗系统，面向电台个体识别、业务识别、新类检测、数据扩充、开集信号分选等实际需求，基于人工智能技术实现并达到业内领先水平。
                        </p>
                        <div className={processStyles.img}>
                            <Image
                                src={process2}
                                className={processStyles.ant_img}
                                preview={{
                                    src: process2,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignalProcess;