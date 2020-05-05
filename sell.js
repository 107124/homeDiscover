import React, { Component } from 'react';

import DropzoneComponent from "react-dropzone-component";

// import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
// import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default class Sell extends React.Component {
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
            <div>
                <div>hello sell your place!</div>
                <DropzoneComponent />
            </div>
        )
    }
}