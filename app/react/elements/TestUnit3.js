/**
 * Created by fazdev on 09.11.16.
 */
import React from 'react';
import TestUnitProps from './TestUnitProps';


export default class TestUnit3 extends React.Component {
    static testName = "bad example3: arrow  in render";
    props;
    static defaultProps = new TestUnitProps();
    render() {
        return <span {...this.props} onClick={() => {
            console.log(this.constructor.testName, this.props.key);
        }}>.</span>;
    }
}