import React from "react";


export default class Listings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "Initial State",
            item: props.item
        };
    }

    render() {
        return (
            <div className="listings-container">
                <h1>{this.state.item}</h1>
            </div>
        )
    }
}