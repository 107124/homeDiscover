import React from "react";
import Listings from "./listings";

import Iframe from "react-iframe";


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "Initial State",
        };
    }

    renderListings = () => {
        const data = [
            "How old are you?",
            "You're out for a walk and notice a snake 5 ft. from you. Do you kill it?",
            "question3",
            "question4",
            "question5",
            "question6",
            "question7",
            "question8",
            "question9"
        ];

        return data.map(listing => {
            return <Listings item={listing} />;
        });
    };

    render() {
        return (
            <div className="homepage-container">
                <div className="left-map">
                    <Iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35059845.75868844!2d-72.9285079806818!3d40.43635630259214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1585601138209!5m2!1sen!2sus" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
                </div>
                <div className="listings">
                    {this.renderListings()}
                </div>
            </div>
        )
    }
}