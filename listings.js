import React from "react";


export default class Listings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "Initial State",
            key: props.key,
            item: props.item,
            listings: props.listings,
            listing_id: props.listing_id,
            status: props.status,
            property_id: props.property_id
        };
    }


    render() {
        return (
            <div className="listings-container">
                <h1>{this.state.listings}</h1>
            </div>
        )
    }
}