import React from "react";
import { connect } from "react-redux";

class NewTodo extends React.Component {
    render() {
        return (
            <>
                <form className="form">
                    <input type="text" defaultValue={this.props.title} placeholder="What needs to be done?" onBlur={this.props.addNewTodo} />
                </form>
            </>
        )
    }
}

const mapState = (state) => ({ title: state.newTitle })
const mapAction = (dispatch) => {
    return {
        addNewTodo: (event) => dispatch({ type: 'NEW_TODO', payload: event.target.value })
    }
} 

export default connect(mapState, mapAction)(NewTodo)