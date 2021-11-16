import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import plan from '../../assets/images/plan.png'
import planStyles from './index.module.less'

class Plan extends Component {
    render() {
        return (
            <div className={planStyles.plan}>
                <img className={planStyles.img} src={plan} alt=""/>
            </div>
        );
    }
}

export default connect()(withRouter(Plan));