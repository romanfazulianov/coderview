/**
 * Created by fazdev on 07.11.16.
 */

import React from 'react';
import TestUnit from './TestUnit';

class TestProps {
    /** @type {number} */
    count = 10;
    /** @type {number} */
    amount = 100;
    /** @type {TestUnit.<testName>} */
    TestUnit = TestUnit;
    /** @type {function} */
    testStarted = () => {};
    /** @type {function} */
    testFinished = () => {};
}

class TestState {
    /** @type {TestUnit[]} */
    testUnits = [];
    /** @type {number} */
    count = 0;
}

export default class Test extends React.Component {
    /** @type {TestProps} */
    props;
    static defaultProps = new TestProps();
    state;
    constructor(props) {
        super(props);
        this.state = new TestState();
    }
    
    componentDidMount() {
        console.log('1');
        let props = this.props;
        /** @type {TestState} */
        let state = new TestState;
        props.testStarted(props.TestUnit.testName);
        this.startNewRun(state);
    }
    
    componentDidUpdate() {
        let props = this.props;
        let state = this.state;
        if (state.count === props.count) {
           return props.testFinished(props.TestUnit.testName);
        }
        this.startNewRun(state);
        this.forceUpdate();
    }
    
    render() {
        console.log('render', this.state.count);
        return <div>
            {this.state.testUnits}
        </div>;
    }

    componentWillUnmout() {
        console.info("!!!!!!!!!!!!!!!!!!!");
    }
    /** @param {TestState} oldState*/
    startNewRun = (oldState) => {
        let props = this.props;
        /** @type {TestState} */
        let state = /** @type {TestState} */{};
        let amount = props.amount;
        let TestUnit = props.TestUnit;
        let testUnits = [];
        for (let i = 0; i < amount; i++) {
            testUnits.push(<TestUnit key={i} />);
        }
        state.testUnits = testUnits;
        state.count = oldState.count + 1;
        this.setState(state);
    }
}