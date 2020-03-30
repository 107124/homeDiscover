import React from "react";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: ""
        };
    }

    render() {
        return (
            <div className="homepage-container">
                <div>hello</div>
                <h1>from home page</h1>
            </div>
        )
    }
}