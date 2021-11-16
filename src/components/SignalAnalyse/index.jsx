import React, { Component } from 'react';
import { Card } from 'antd';
import signal from '../../assets/images/signal.png'
import feature from '../../assets/images/feature.png'
import analyseStyles from './index.module.less'

const { Meta } = Card;

class SignalAnalyse extends Component {
    render() {
        return (
            <div className={analyseStyles.analyse}>
                <div className={analyseStyles.allCard}>
                    <Card
                        className={analyseStyles.card}
                        hoverable
                        cover={<img className={analyseStyles.card_img} alt="example" src={signal} />}
                    >
                        <Meta title="信号特征提取" description="信号特征提取是信号分析任务的关键(鲁棒/判别/有效/普适)。常用暂态/稳态特征有：Hilbert变换、小波变换、分形维、时频分布、EMD、高阶统计量等。" />
                    </Card>
                    <Card
                        className={analyseStyles.card}
                        hoverable
                        cover={<img className={analyseStyles.card_img} alt="example" src={feature} />}
                    >
                        <Meta title="特征工程" description="电磁环境日益复杂，对抗博弈性增强，使信号呈现海量、高维、多样、动态、多扰等一些非结构化特点，给传统依赖专家经验的“特征工程”带来困难。" />
                    </Card>
                </div>
            </div>
        );
    }
}

export default SignalAnalyse;