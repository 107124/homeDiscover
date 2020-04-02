import React from "react";


export default class Listings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "Initial State",
            key: props.key,
            item: props.item,
            address: props.address,
            status: props.status,
            bed: props.bed,
            bath: props.bath,
            price: props.price,
            image: props.image,
            listing_id: props.listing_id,
            status: props.status,
            property_id: props.property_id
        };
    }


    render() {
        return (
            <div className="listings-container">
                <div className="left-container">
                    <img className="home-image" src={this.state.image} alt="image" />
                </div>
                <div className="right-container">
                    <h1>{this.state.address}</h1>
                    <p>For: {this.state.status}</p>
                    <p>Bed: {this.state.bed}</p>
                    <p>Bath: {this.state.bath}</p>
                    <p>{this.state.price}</p>
                </div>
            </div>
        )
    }
}