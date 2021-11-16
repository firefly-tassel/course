import React, { Component } from 'react';
import { Image, Popover } from 'antd'
import encode1 from '../../assets/images/encode1.png'
import encode2 from '../../assets/images/encode2.png'
import encode3 from '../../assets/images/encode3.png'
import encodeStyles from './index.module.less'

const content1 = (
    <div>
        <p>a.RS编码</p>
        <p>b.TCM编码</p>
        <p>c.汉明编码</p>
        <p>d.卷积编码</p>
        <p>e.BCH编码</p>
        <p>f.LDPC编码</p>
    </div>
);

const content2 = (
    <div>
        <p>总体正确率OA: 91.24%</p>
        <p>平均正确率AA: 91.15%</p>
        <p>Kappa系数KC: 0.9107</p>
    </div>
);

class SignalEncode extends Component {
    render() {
        return (
            <div className={encodeStyles.encode}>
                <div className={encodeStyles.card}>
                    <div className={encodeStyles.left}>
                        <div className={encodeStyles.img}>
                            <Image
                                src={encode1}
                                className={encodeStyles.ant_img}
                                preview={{
                                    src: encode1,
                                }}
                            />
                        </div>
                        <p className={encodeStyles.text}>
                            针对计算与存储复杂度高的问题，设计了轻量化一维卷积网络模型
                        </p>
                    </div>
                    <div className={encodeStyles.gap}></div>
                    <div className={encodeStyles.right}>
                        <div className={encodeStyles.imgs}>
                            <Popover placement="rightTop" content={content1} title="信号编码类型">
                                <div className={encodeStyles.img}>
                                    <Image
                                        src={encode2}
                                        className={encodeStyles.ant_img}
                                        preview={{
                                            src: encode2,
                                        }}
                                    />
                                </div>
                            </Popover>
                            <Popover placement="leftTop" content={content2} title="识别结果">
                                <div className={encodeStyles.img}>
                                    <Image
                                        src={encode3}
                                        className={encodeStyles.ant_img}
                                        preview={{
                                            src: encode3,
                                        }}
                                    />
                                </div>
                            </Popover>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignalEncode;