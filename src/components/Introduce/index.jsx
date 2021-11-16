import React, { Component } from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { changeCurrent } from '../../redux/actions/header';
import spinLogo from '../../assets/images/logo.svg'
import introStyles from './index.module.less'

class Introduce extends Component {

    render() {

        return (
            <div className={introStyles.introduce}>
                <div className={introStyles.introduce_text}>
                    SIM课题组欢迎你的到来
                    <p className={introStyles.detail}>
                    SIM课题组成立于西安电子科技大学人工智能学院，是由<br/>
                    信号分析、影像解释、机器学习三大研究课题方向组成，课题组<br/>
                    的负责人是杨淑媛教授，指导老师有王敏教授以及冯志玺副教授。<br/>
                    此外，团队现有博士研究生12人，硕士研究生32人，外籍研究生<br/>
                    7人。在我们团队，你将感受到来自老师的关怀和来自同学的关爱，<br/>
                    你将能够充分实现自己的人生理想和价值。
                    
                    </p>
                </div>
                <div className={introStyles.introduce_btn}>
                    <Button className={introStyles.btn1} onClick={() => { this.props.changeCurrent({current: 'team'});this.props.history.push("/team/briefIntro") }}>团队介绍</Button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button className={introStyles.btn2}>联系我们</Button>
                </div>
                <img className={introStyles.introduce_logo} src={spinLogo} width="15rem" height="15rem" alt="" />
            </div>
        );
    }
}

export default connect(
    state => ({ current: state.current }),
    { changeCurrent }
)(withRouter(Introduce));