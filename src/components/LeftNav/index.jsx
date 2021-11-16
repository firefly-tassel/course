import React, { Component } from 'react';
import { Menu } from 'antd';
import {
    SecurityScanOutlined,
    BookOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import leftNavStyles from './index.module.less'

const { SubMenu } = Menu;

class LeftNav extends Component {
    state = {
        collapsed: false,
        color: true
    };

    // toggleCollapsed = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //         color: !this.state.color
    //     });
    // };

    render() {
        return (
            <div style={{ background: '#000B18' }} className={leftNavStyles.leftNav}>
                {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 4 }}>
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                </Button> */}
                <Menu
                    className={leftNavStyles.leftNav_menu}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="1" icon={<AppstoreOutlined />} onClick={() => { this.props.history.push("/team/briefIntro") }}>
                        简要介绍
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<SecurityScanOutlined />} title="研究内容">
                        <Menu.Item key="2" onClick={() => { this.props.history.push("/team/analyse") }}>智能信号分析</Menu.Item>
                        <Menu.Item key="3" onClick={() => { this.props.history.push("/team/feature") }}>信号深度特征学习</Menu.Item>
                        <Menu.Item key="4" onClick={() => { this.props.history.push("/team/modulate") }}>信号调制类型识别</Menu.Item>
                        <Menu.Item key="5" onClick={() => { this.props.history.push("/team/encode") }}>信号编码类型识别</Menu.Item>
                        <Menu.Item key="6" onClick={() => { this.props.history.push("/team/modulateEncode") }}>调制编码联合识别</Menu.Item>
                        <Menu.Item key="7" onClick={() => { this.props.history.push("/team/radiation") }}>辐射源个体识别</Menu.Item>
                        <Menu.Item key="8" onClick={() => { this.props.history.push("/team/identify") }}>开集识别</Menu.Item>
                        <Menu.Item key="9" onClick={() => { this.props.history.push("/team/generate") }}>信号生成</Menu.Item>
                        <Menu.Item key="10" onClick={() => { this.props.history.push("/team/process") }}>AI+信号处理</Menu.Item>
                        <Menu.Item key="11" onClick={() => { this.props.history.push("/team/design") }}>AI智能软硬件设计</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="13" icon={<BookOutlined />} onClick={() => { this.props.history.push("/team/learning") }}>
                        知识学习
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default connect()(withRouter(LeftNav));;