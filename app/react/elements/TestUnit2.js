/**
 * Created by fazdev on 09.11.16.
 */
import React from 'react';
import TestUnitProps from './TestUnitProps';


export default class TestUnit2 extends React.Component {
    static testName = "bad example2: render + render bind";
    props;
    static defaultProps = new TestUnitProps();
    render() {
        let logger = function() {
            console.log(this.constructor.testName, this.props.key);
        };
        return <span {...this.props} onClick={logger.bind(this)}>.</span>;
    }
}