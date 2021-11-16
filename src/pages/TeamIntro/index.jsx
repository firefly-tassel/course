import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import LeftNav from '../../components/LeftNav';
import teamStyles from './index.module.less'

class TeamIntro extends Component {

    render() {
        return (
            <div className={teamStyles.team}>
                <div className={teamStyles.left}>
                    <LeftNav/>
                </div>
                <div className={teamStyles.content}>
                    {this.props.children} 
                </div>
            </div>
        );
    }
}

export default connect()(withRouter(TeamIntro));