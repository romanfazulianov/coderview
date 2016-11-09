/**
 * Created by fazdev on 08.11.16.
 */

import React from 'react';

import Test from './Test';
import TestUnit1 from './TestUnit1';
import TestUnit2 from './TestUnit2';
import TestUnit3 from './TestUnit3';
import TestUnit4 from './TestUnit4';
import TestUnit5 from './TestUnit5';

import Perf from 'react-addons-perf';
import * as actions from '../actions/TestPerf';

class TestingWithPerfProps {
    /** @type {?number} */
    testNum = null;
    /** @type {number} */
    testTimes = 1;
    /** @type {number} */
    testUnitAmount = 100;
    /** @type {function} */
    dispatch = () => {};
    /** @type {object[]} */
    results = [];

    cleared;
}

export default class TestingWithPerf extends React.Component {
    /** @type {TestingWithPerfProps} */
    props;
    static defaultProps = new TestingWithPerfProps();
    static propTypes = {
        testNum: React.PropTypes.number,
        testTimes: React.PropTypes.number,
        testUnitAmount: React.PropTypes.number
    };

    componentDidUpdate() {
        if (!this.props.cleared) {
            this.props.dispatch(actions.cleared());
        }
    }

    render() {
        console.log("fdhgh");
        return (
            <div>
                <div>
                    {this.renderForm()}
                </div>
                <div>
                    {this.renderTest()}
                </div>
                <div>
                    {this.renderResults()}
                </div>
            </div>
        );
    }

    startMeasurement = (name) => {
        console.log(`test ${this.props.testNum} : ${name} is started;`);
        console.profile(name);
        Perf.start();
    };

    endMeasurement = (name) => {
        Perf.stop();
        console.profileEnd();
        let measurements = Perf.getLastMeasurements();
        Perf.printInclusive(measurements);
        Perf.printExclusive(measurements);
        Perf.printWasted(measurements);
        Perf.printOperations(measurements);
        console.log(`test ${this.props.testNum} : ${name} is ended;`);
        this.props.dispatch(actions.updateTestResultsAfterRun(this.props.results.concat(measurements)));
    };

    startTesting = () => {
        console.log('startTesting');
        this.props.dispatch(actions.clearTestResultsBeforeRun());
    };

    renderTest = () =>{
        let props = this.props;
        let testNum = props.testNum;
        let testTimes = props.testTimes;
        let testUnitAmount = props.testUnitAmount;
            console.log('renderTest', props.cleared && testNum);
        switch (props.cleared && testNum) {
            case 0:
                return <Test count={testTimes} amount={testUnitAmount} TestUnit={TestUnit1} testStarted={this.startMeasurement}
                             testFinished={this.endMeasurement}/>;
            case 1:
                return <Test count={testTimes} amount={testUnitAmount} TestUnit={TestUnit2} testStarted={this.startMeasurement}
                             testFinished={this.endMeasurement}/>;
            case 2:
                return <Test count={testTimes} amount={testUnitAmount} TestUnit={TestUnit3} testStarted={this.startMeasurement}
                             testFinished={this.endMeasurement}/>;
            case 3:
                return <Test count={testTimes} amount={testUnitAmount} TestUnit={TestUnit4} testStarted={this.startMeasurement}
                             testFinished={this.endMeasurement}/>;
            case 4:
                return <Test count={testTimes} amount={testUnitAmount} TestUnit={TestUnit5} testStarted={this.startMeasurement}
                             testFinished={this.endMeasurement}/>;
            default:
                return null;
        }
    };

    renderForm = () => {
        return <input type="button" value="Начать тесты" onClick={this.startTesting}/>;
    };

    renderResults = () => {
        if (this.props.testNum != null) {
            return (
                <h4>
                    {
                        this.props.testNum > 4 ?
                        'Тестирование завершено! Результаты в консоли разработчика!'
                        :
                        'Выполняется тестирование!'
                    }
                </h4>
            );
        }
        return <h4>Начни тест!</h4>;
    };

}