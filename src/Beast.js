import React from "react";

class Beast extends React.Component {
    render() {
        return (
            <>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default Beast;