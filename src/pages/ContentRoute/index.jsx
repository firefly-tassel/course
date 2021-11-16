import React, { Component, lazy } from 'react'
import { Route, Switch, Redirect} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './index.module.less'

const TeamIntro = lazy(() => import("../TeamIntro"))
const BriefIntro = lazy(() => import("../../components/BriefIntro"))
const SignalAnalyse = lazy(() => import("../../components/SignalAnalyse"))
const FeatureLearning = lazy(() => import("../../components/FeatureLearning"))
const SignalModulate = lazy(() => import("../../components/SignalModulate"))
const SignalEncode = lazy(() => import("../../components/SignalEncode"))
const ModulateEncode = lazy(() => import("../../components/ModulateEncode"))
const Radiation = lazy(() => import("../../components/Radiation"))
const Identify = lazy(() => import("../../components/Identify"))
const SignalGenerate = lazy(() => import("../../components/SignalGenerate"))
const SignalProcess = lazy(() => import("../../components/SignalProcess"))
const WareDesign = lazy(() => import("../../components/WareDesign"))

export default class ContentRoute extends Component {
    render() {
        const location = this.props.location
        return (
            <TeamIntro>
                <TransitionGroup>
                    <CSSTransition key={location.key} timeout={1000} classNames="page">
                        <Switch location={location}>
                            <Route path="/team/briefIntro" component={BriefIntro} />
                            <Route path="/team/analyse" component={SignalAnalyse} />
                            <Route path="/team/feature" component={FeatureLearning} />
                            <Route path="/team/modulate" component={SignalModulate} />
                            <Route path="/team/encode" component={SignalEncode} />
                            <Route path="/team/modulateEncode" component={ModulateEncode} />
                            <Route path="/team/radiation" component={Radiation} />
                            <Route path="/team/identify" component={Identify} />
                            <Route path="/team/generate" component={SignalGenerate} />
                            <Route path="/team/process" component={SignalProcess} />
                            <Route path="/team/design" component={WareDesign} />
                            <Redirect to="/team/briefIntro" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </TeamIntro>
        )
    }
}
