/**
 * Created by fazdev on 09.11.16.
 */
import React from 'react';
import TestUnitProps from './TestUnitProps';

export default class TestUnit1 extends React.Component {
    static testName = "bad example1: prototype + render bind";
    /** @type {TestUnitProps} */
    props;
    static defaultProps = new TestUnitProps();
    logger() {
        console.log(this.constructor.testName, this.props.key);
    }
    render() {
        return <span {...this.props} onClick={this.logger.bind(this)}>.</span>;
    }
}