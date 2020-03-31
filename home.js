import React from "react";
import Listings from "./listings";

import Iframe from "react-iframe";


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "Initial State",
            listing: "",
            listings: ["hello", "world"],
            listing_id: "",
            prop_status: "",
            property_id: ""
        };
    }

//     componentDidMount() {
//     fetch("https://realtor.p.rapidapi.com/properties/detail?listing_id=608763437&prop_status=for_sale&property_id=4599450556", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "realtor.p.rapidapi.com",
// 		"x-rapidapi-key": "7603016162msh8263f88a5aa10dfp18e91ajsna3493aef8fcf"
//     }
    
//     })
//     .then(response => response.json())
//     .then(data =>
//         this.setState({
//             listings: data,
//             isLoading: false,
//             listing_id: "608763437",
//             prop_status: "for_sale",
//             property_id: "4599450556"
//         }))
//     .catch(err => {
//         console.log("error in the GET request", err);
//     });
// }

      renderListings = () => {
        return this.state.listings.map(listing => {
          return (
            <Listings
              listings={this.state.listings}
              listing_id={listing.listing_id}
              status={listing.prop_status}
              property_id={listing.property_id}

            />
          );
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