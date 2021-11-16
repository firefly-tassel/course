import React, { Component } from 'react';
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import Cooperator from '../Cooperator';
import ResearchProject from '../ResearchProject';
import briefStyles from './index.module.less'

const { TabPane } = Tabs;

class BriefIntro extends Component {
    render() {
        return (
            <div className={briefStyles.brief}>
                <div className={briefStyles.card}>
                    <Tabs defaultActiveKey="1" className={briefStyles.content}>
                        <TabPane
                            tab={
                                <span>
                                    <AppleOutlined />
                                    承研国家级科研项目
                                </span>
                            }
                            key="1"
                        >
                            <ResearchProject />
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <AndroidOutlined />
                                    合作单位
                                </span>
                            }
                            key="2"
                        >
                            <Cooperator />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default BriefIntro;