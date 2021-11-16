import React, { Component } from 'react';
import { Image, Card } from 'antd'
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons'
import moduEncode1_1 from '../../assets/images/moduEncode1_1.png'
import moduEncode1_2 from '../../assets/images/moduEncode1_2.png'
import moduEncode1_3 from '../../assets/images/moduEncode1_3.png'
import moduEncode1_4 from '../../assets/images/moduEncode1_4.png'
import moduEncode2 from '../../assets/images/moduEncode2.png'
import moduEncode3 from '../../assets/images/moduEncode3.png'
import moduEncode4 from '../../assets/images/moduEncode4.png'
import moduEncode5 from '../../assets/images/moduEncode5.png'
import moduEncodeStyles from './index.module.less'

const tabList = [
    {
        key: 'tab1',
        tab: '短波频段',
    },
    {
        key: 'tab2',
        tab: '超短波频段',
    },
];

const contentList = {
    tab1: <div><p>（1）汉明码、码率为二分之一的216非系统卷积码、码率为三分之二的216非系统卷积码（3种）</p>
        <p>（2）QPSK、8PSK、2FSK（3种）将信道编码方式与调制方式两两组合，共计9种编码调制信号。</p></div>,
    tab2: <div><p>（1）汉明码、码率为二分之一的216非系统卷积码、码率为三分之二的216非系统卷积码、码率为四分之三的432非系统卷积码（4种）</p>
        <p>（2）BPSK、QPSK、2FSK、2FSK/FM、 QFSK/FM （5种）将信道编码方式与调制方式两两组合，共计20种编码调制信号。AM、FM单独调制，生成2种调制信号。</p></div>,
};

class ModulateEncode extends Component {
    state = {
        current: 1,
        activeTabKey: 'tab1'
    }

    prev = () => {
        this.setState({ current: this.state.current - 1 });
    }
    next = () => {
        this.setState({ current: this.state.current + 1 });
    }

    onTabChange = key => {
        this.setState({ activeTabKey: key });
    };

    render() {
        const { current, activeTabKey } = this.state;
        return (
            <div className={moduEncodeStyles.moduEncode}>
                <div className={moduEncodeStyles.card}>
                    {current === 1 ? <LeftCircleOutlined className={moduEncodeStyles.noleft} style={{ fontSize: '5rem' }} /> :
                        <LeftCircleOutlined className={moduEncodeStyles.left} style={{ fontSize: '5rem' }} onClick={this.prev} />
                    }
                    <div className={moduEncodeStyles.content}>
                        <div className={moduEncodeStyles.content1} style={{ display: current === 1 ? 'block' : 'none' }}>
                            <Card
                                style={{ width: '70rem' }}
                                title="31种编码调制信号"
                                tabList={tabList}
                                activeTabKey={activeTabKey}
                                onTabChange={key => {
                                    this.onTabChange(key);
                                }}
                            >
                                {contentList[activeTabKey]}
                            </Card>
                            <div className={moduEncodeStyles.imgs}>
                                <div className={moduEncodeStyles.img1}>
                                    <Image
                                        src={moduEncode1_1}
                                        className={moduEncodeStyles.ant_img}
                                        preview={{
                                            src: moduEncode1_1,
                                        }}
                                    />
                                </div>
                                <div className={moduEncodeStyles.img2}>
                                    <Image
                                        src={moduEncode1_2}
                                        className={moduEncodeStyles.ant_img}
                                        preview={{
                                            src: moduEncode1_2,
                                        }}
                                    />
                                </div>
                                <div className={moduEncodeStyles.img3}>
                                    <Image
                                        src={moduEncode1_3}
                                        className={moduEncodeStyles.ant_img}
                                        preview={{
                                            src: moduEncode1_3,
                                        }}
                                    />
                                </div>
                                <div className={moduEncodeStyles.img4}>
                                    <Image
                                        src={moduEncode1_4}
                                        className={moduEncodeStyles.ant_img}
                                        preview={{
                                            src: moduEncode1_4,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={moduEncodeStyles.content2} style={{ display: current === 2 ? 'block' : 'none' }}>
                            <div className={moduEncodeStyles.img}>
                                <Image
                                    src={moduEncode2}
                                    className={moduEncodeStyles.ant_img}
                                    preview={{
                                        src: moduEncode2,
                                    }}
                                />
                            </div>
                            <div className={moduEncodeStyles.text}>引入通道间显著注意机制，设计了深度注意卷积网络模型，提升了特征的判别性</div>
                        </div>
                        <div className={moduEncodeStyles.content3} style={{ display: current === 3 ? 'block' : 'none' }}>
                            <div className={moduEncodeStyles.img}>
                                <Image
                                    src={moduEncode3}
                                    className={moduEncodeStyles.ant_img}
                                    preview={{
                                        src: moduEncode3,
                                    }}
                                />
                                <div className={moduEncodeStyles.text}>在31类信号分类中达到了较高的总体正确率</div>
                            </div>
                        </div>
                        <div className={moduEncodeStyles.content4} style={{ display: current === 4 ? 'block' : 'none' }}>
                            <div className={moduEncodeStyles.img}>
                                <Image
                                    src={moduEncode4}
                                    className={moduEncodeStyles.ant_img}
                                    preview={{
                                        src: moduEncode4,
                                    }}
                                />
                            </div>
                        </div>
                        <div className={moduEncodeStyles.content5} style={{ display: current === 5 ? 'block' : 'none' }}>
                            <div className={moduEncodeStyles.img}>
                                <Image
                                    src={moduEncode5}
                                    className={moduEncodeStyles.ant_img}
                                    preview={{
                                        src: moduEncode5,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    {current === 5 ? <RightCircleOutlined className={moduEncodeStyles.noright} style={{ fontSize: '5rem' }} /> : <RightCircleOutlined className={moduEncodeStyles.right} style={{ fontSize: '5rem' }} onClick={this.next} />}
                    <span className={moduEncodeStyles.num}>{current}/5</span>
                </div>
            </div>
        );
    }
}

export default ModulateEncode;