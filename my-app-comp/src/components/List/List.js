import React, {Component} from 'react';
import {connect} from 'react-redux';
import {actionAdd} from "./actionList";

class List extends Component {

    render() {

        const list = this.props;

        const showElements = list?.map((e, i) => {
            return <p>{i} - {e}</p>
        })

        return (
            <div>
                {showElements}
                <button onClick={() => dispatch(actionAdd(prompt()))}>Add</button>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        list: store.list
    }
}

export default connect(mapStateToProps)(List);