/**
 * Created by fazdev on 08.11.16.
 */

import React from 'react';

import Test from './Test';
import TestUnit1 from './TestUnit1';
import TestUnit2 from './TestUnit2';
import TestUnit3 from './TestUnit3';
import TestUnit4 from './TestUnit4';

import Perf from 'react-addons-perf';
import * as actions from '../actions/TestPerf';


export default class TestingWithPerf extends React.Component {
    /** @type {TestingWithPerfProps} */
    props;
    static defaultProps = new TestingWithPerfProps();
    static propTypes = {
        testNum: React.PropTypes.number,
        testTimes: React.PropTypes.number,
        testUnitAmount: React.PropTypes.number
    };

    startMeasurement = (name) => {
        console.log(`test ${this.props.testNum} : ${name} is started;`);
        Perf.start();
    };

    endMeasurement = (name) => {
        Perf.stop();
        let measurements = Perf.getLastMeasurements();
        console.log(`test ${this.props.testNum} : ${name} is ended;`);
        console.dir(measurements);
        Perf.printInclusive(measurements);
        Perf.printExclusive(measurements);
        Perf.printWasted(measurements);
        Perf.printOperations(measurements);
        this.props.dispatch(actions.incrementTestNum());
    };

    startTesting = () => {
        this.props.dispatch(actions.setTestNumToZero());
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
                return <input type="button" name="Start tests" onClick={this.startTesting}/> ;
        }
    }
}

class TestingWithPerfProps {
    /** @type {?number} */
    testNum = null;
    /** @type {number} */
    testTimes = 1;
    /** @type {number} */
    testUnitAmount = 100;
    /** @type {function} */
    dispatch = () => {};
}