import React, { Component } from 'react';
import {  withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import resultStyles from './index.module.less'

class Result extends Component {
    render() {
        return (
            <div className={resultStyles.result}>
                result
            </div>
        );
    }
}

export default connect()(withRouter(Result));