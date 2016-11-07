/**
 * Created by fazdev on 08.11.16.
 */

import React from 'react';

import Test from './Test';
import TestUnit1 from './TestUnit1';
import TestUnit2 from './TestUnit2';
import TestUnit3 from './TestUnit3';
import TestUnit4 from './TestUnit4';


export default class TestingWithPerf extends React.Component {
    /** @type {TestingWithPerfProps} */
    props;
    static defaultProps = new TestingWithPerfProps();
    static propTypes = {
        testNum: React.PropTypes.number,
        testTimes: React.PropTypes.number,
        testUnitAmount: React.PropTypes.number
    };

    state;

    componentDidMount() {

    };

    testRunner = () => {

    };
    startMeasurement = () => {
    };
    endMeasurement = () => {
    };

    render() {
        let testNum = this.props.testNum;
        let testTimes = this.props.testTimes;
        let testUnitAmount = this.props.testUnitAmount;
        switch (testNum) {
            case 0:
                return <Test count={testTimes} ammount={testUnitAmount} testUnit={TestUnit1} testStarted={this.startMeasurement}
                             testFinished={this.endMeasurement}/>;
            case 1:
                return <Test count={testTimes} ammount={testUnitAmount} testUnit={TestUnit2} testStarted={this.startMeasurement}
                             testFinished={this.endMeasurement}/>;
            case 2:
                return <Test count={testTimes} ammount={testUnitAmount} testUnit={TestUnit3} testStarted={this.startMeasurement}
                             testFinished={this.endMeasurement}/>;
            case 3:
                return <Test count={testTimes} ammount={testUnitAmount} testUnit={TestUnit4} testStarted={this.startMeasurement}
                             testFinished={this.endMeasurement}/>;
            default:
                return null;
        }
    }
}

class TestingWithPerfProps {
    /** @type {number} */
    testNum = 0;
    /** @type {number} */
    testTimes = 30;
    /** @type {number} */
    testUnitAmount = 1000;
}