import React, { Component } from 'react';
import { Tabs, Steps, Button, message, Image } from 'antd';
import { AppleOutlined, AndroidOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Development from '../Development'
import feature1 from '../../assets/images/feature1.png'
import feature2 from '../../assets/images/feature2.png'
import feature3 from '../../assets/images/feature3.png'
import feature4 from '../../assets/images/feature4.png'
import featureStyles from './index.module.less'

const { Step } = Steps;

const steps = [
    {
        title: '信号预处理',
        content: <div className={featureStyles.img}>
            <div className={featureStyles.feature_from}>
                <Image
                    src={feature1}
                    className={featureStyles.ant_img}
                    preview={{
                        src: feature1,
                    }}
                />
            </div>
            <ArrowRightOutlined className={featureStyles.arrow} style={{ fontSize: '10rem' }} />
            <div className={featureStyles.feature_to}>
                <Image
                    src={feature2}
                    className={featureStyles.ant_img}
                    preview={{
                        src: feature2,
                    }}
                />
            </div>
        </div>,
    },
    {
        title: '时频表示',
        content: <div className={featureStyles.img}>
            <div className={featureStyles.feature_from}>
                <Image
                    src={feature2}
                    className={featureStyles.ant_img}
                    preview={{
                        src: feature2,
                    }}
                />
            </div>
            <ArrowRightOutlined className={featureStyles.arrow} style={{ fontSize: '10rem' }} />
            <div className={featureStyles.feature_to}>
                <Image
                    src={feature3}
                    className={featureStyles.ant_img}
                    preview={{
                        src: feature3,
                    }}
                />
            </div>
        </div>,
    },
    {
        title: '设计模型',
        content: <div className={featureStyles.img}>
            <div className={featureStyles.feature_from}>
                <Image
                    src={feature3}
                    className={featureStyles.ant_img}
                    preview={{
                        src: feature3,
                    }}
                />
            </div>
            <ArrowRightOutlined className={featureStyles.arrow} style={{ fontSize: '10rem' }} />
            <div className={featureStyles.feature_to}>
                <Image
                    src={feature4}
                    className={featureStyles.ant_img}
                    preview={{
                        src: feature4,
                    }}
                />
            </div>
        </div>,
    },
    {
        title: '分类器',
        content: <div className={featureStyles.img}>
            <div className={featureStyles.feature_from}>
                <Image
                    src={feature4}
                    className={featureStyles.ant_img}
                    preview={{
                        src: feature4,
                    }}
                />
            </div>
            <ArrowRightOutlined className={featureStyles.arrow} style={{ fontSize: '10rem' }} />
            <div className={featureStyles.label}>
                <span>类别标签</span>
            </div>
        </div>,
    },
];

const { TabPane } = Tabs;

class FeatureLearning extends Component {

    state = {
        current: 0
    }

    next = () => {
        this.setState({ current: this.state.current + 1 });
    };

    prev = () => {
        this.setState({ current: this.state.current - 1 });
    };

    render() {
        const { current } = this.state;

        return (
            <div className={featureStyles.feature}>
                <div className={featureStyles.card}>
                    <Tabs defaultActiveKey="1" className={featureStyles.content}>
                        <TabPane
                            tab={
                                <span>
                                    <AppleOutlined />
                                    应用进展
                                </span>
                            }
                            key="1"
                        >
                            <Development />
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <AndroidOutlined />
                                    步骤
                                </span>
                            }
                            key="2"
                        >
                            <div className={featureStyles.steps}>
                                <Steps current={current}>
                                    {steps.map(item => (
                                        <Step key={item.title} title={item.title} />
                                    ))}
                                </Steps>
                                <div className={featureStyles.steps_content}>{steps[current].content}</div>
                                <div className={featureStyles.steps_action}>
                                    {current > 0 && (
                                        <Button style={{ margin: '0 8px' }} onClick={() => this.prev()}>
                                            上一步
                                        </Button>
                                    )}
                                    {current === steps.length - 1 && (
                                        <Button type="primary" onClick={() => message.success('Processing complete!')}>
                                            完成
                                        </Button>
                                    )}
                                    {current < steps.length - 1 && (
                                        <Button type="primary" onClick={() => this.next()}>
                                            下一步
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default FeatureLearning;