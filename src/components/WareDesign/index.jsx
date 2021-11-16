import React, { Component } from 'react';
import { Image } from 'antd';
import design1 from '../../assets/images/design1.png'
import design2 from '../../assets/images/design2.png'
import designStyles from './index.module.less'

class WareDesign extends Component {
    render() {
        return (
            <div className={designStyles.design}>
                <div className={designStyles.card}>
                    <div className={designStyles.left}>
                        <h2 className={designStyles.title}>1.TX2平台</h2>
                        <div className={designStyles.img}>
                            <Image
                                src={design1}
                                className={designStyles.ant_img}
                                preview={{
                                    src: design1,
                                }}
                            />
                        </div>
                        <p className={designStyles.text}>
                            团队所研发的演化认知深度网络实现了复杂电磁环境下的辐射源个体开集精准识别，实用效果良好。作为认知电子战专项的代表性成果，参与后期工程研制。通过多年攻关，完成了原创算法从理论、技术到工程实现的转化。
                        </p>
                    </div>
                    <div className={designStyles.gap}></div>
                    <div className={designStyles.right}>
                        <h2 className={designStyles.title}>2.Atlas 200DK平台</h2>
                        <div className={designStyles.img}>
                            <Image
                                src={design2}
                                className={designStyles.ant_img}
                                preview={{
                                    src: design2,
                                }}
                            />
                        </div>
                        <p className={designStyles.text}>
                            图中为华为 Atlas 200DK 平台上运行× × ×信号检测识别的一个轻量化神经网络（SSD）所得到的结果，该网络实现了对12类信号的检测识别。
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default WareDesign;