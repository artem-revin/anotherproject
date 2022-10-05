import React, {Component} from 'react';
import {connect} from 'react-redux';

class List extends Component {
    render() {
        return (
            <div>
                <button>Add</button>
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