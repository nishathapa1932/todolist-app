import React from 'react';

class LIsts extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.store)
        this.state = {
          items: props.todos
        };
    }
    render() {
        return (
            <>
                 <ul className="theList">
                    {this.state.items?.map((item, index) => (
                        <li key={index}>
                        <input type="checkbox" checked={item.done} />
                        <span>{item.title}</span>
                        <button className="btn">
                            x
                        </button>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

export default LIsts