import React, { Component } from 'react';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PersonInfo from '../PersonInfo'
import ysyAvatar from '../../assets/images/ysy.png'
import fzxAvatar from '../../assets/images/fzx.png'
import wmAvatar from '../../assets/images/wm.png'
import info from '../../assets/json/personInfo.json';
import memberStyles from './index.module.less'

const { Panel } = Collapse;

class MemberIntro extends Component {

    callback = (key) => {
        console.log(key);
    }

    render() {
        return (
            <div className={memberStyles.member}>
                <Collapse onChange={this.callback} defaultActiveKey={['1']}>
                    <Panel header="团队负责人" key="1">
                        <Collapse defaultActiveKey="1" expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
                            <Panel header="杨淑媛" key="1">
                                <PersonInfo avatar={ysyAvatar} job={info[0].job} telephone={info[0].telephone} mail={info[0].mail} orientation={info[0].orientation} address={info[0].address} home={info[0].home} />
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header="团队指导老师" key="2">
                        <Collapse defaultActiveKey="21" expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
                            <Panel header="王敏" key="21">
                                <PersonInfo avatar={wmAvatar} job={info[1].job} telephone={info[1].telephone} mail={info[1].mail} orientation={info[1].orientation} address={info[1].address} home={info[1].home} />
                            </Panel>
                            <Panel header="冯志玺" key="22">
                                <PersonInfo avatar={fzxAvatar} job={info[2].job} telephone={info[2].telephone} mail={info[2].mail} orientation={info[2].orientation} address={info[2].address} home={info[2].home} />
                            </Panel>
                        </Collapse>
                    </Panel>
                    <Panel header="团队核心成员" key="3">
                        <Collapse defaultActiveKey="3" expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
                            <Panel header="冯志玺" key="3">
                                <PersonInfo avatar={fzxAvatar} job={info[0].job} telephone={info[0].telephone} mail={info[0].mail} orientation={info[0].orientation} address={info[0].address} home={info[0].home} />
                            </Panel>
                        </Collapse>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}

export default connect()(withRouter(MemberIntro));