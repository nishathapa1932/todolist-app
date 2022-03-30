import React from "react";
import { connect } from "react-redux";

class Todos extends React.Component {
  render() {
    console.log(this.props.todos)
    return (
      <>
        <ul className="theList">
          {this.props.todos?.map((item, index) => (
            <li key={index}>
              <input type="checkbox" checked={item.completed} />
              <span>{item.title}</span>
              <button className="btn">x</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

const mapState = (store) => ({ todos: store.todos });

export default connect(mapState)(Todos);
