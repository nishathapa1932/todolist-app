import React from "react";

class NewTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          input: ""
        };
    }

    handleChange(event) {
        console.log(event)
    }

    render() {
        return (
            <>
                <form>
                    <input type="text" value={this.state.input} placeholder="What needs to be done?" onChange={this.handleChange} />
                </form>
            </>
        )
    }
}

export default NewTodo