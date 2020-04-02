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
      property_id: "",
      mockData: ["testing", "data"]
    };
  }

  // componentDidMount() {
  //   fetch("https://realtor.p.rapidapi.com/properties/detail?listing_id=608763437&prop_status=for_sale&property_id=4599450556", {
  //     "method": "GET",
  //     "headers": {
  //       "x-rapidapi-host": "realtor.p.rapidapi.com",
  //       "x-rapidapi-key": "7603016162msh8263f88a5aa10dfp18e91ajsna3493aef8fcf"
  //     }

  //   })
  //     .then(response => response.json())
  //     .then(data =>
  //       this.setState({
  //         listings: "data",
  //         isLoading: false,
  //         listing_id: "608763437",
  //         prop_status: "for_sale",
  //         property_id: "4599450556"
  //       }))
  //     .catch(err => {
  //       console.log("error in the GET request", err);
  //     });
  // }

  renderListings = () => {
    // return this.state.listings.map(listing => {
    // const images = document.getElementsByTagName('img')
    // const NewImage = () => {
    //   setTimeout(() => {  return "https://source.unsplash.com/random/900%C3%97700/?house" }, 2000);

    // }

    const test = [
      {
        "address": "797 Central Ave. Massapequa, NY 11758",
        "status": "Sale",
        "bed": 2,
        "bath": 1.5,
        "price": "$1,099/Month",
        "image": "https://source.unsplash.com/random/900x750/?house"
      },
      {
        "address": "863 Park Lane Mableton, GA 30126",
        "status": "Rent",
        "bed": 3,
        "bath": 2.5,
        "price": "$909/Month",
        "image": "https://source.unsplash.com/random/900x1000/?house"
      },
      {
        "address": "8587 Lakewood Lane Enfield, CT 06082",
        "status": "Rent",
        "bed": 3,
        "bath": 2.5,
        "price": "$909/Month",
        "image": "https://source.unsplash.com/random/900x600/?house"
      },
      {
        "address": "49 George Dr. Greensboro, NC 27405",
        "status": "Sale",
        "bed": 2,
        "bath": 1.5,
        "price": "$1,099/Month",
        "image": "https://source.unsplash.com/random/900x700/?house"
      },
      {
        "address": "5 Southampton Ave. Olympia, WA 98512",
        "status": "Rent",
        "bed": 3,
        "bath": 2.5,
        "price": "$909/Month",
        "image": "https://source.unsplash.com/random/900x900/?house"
      },
      {
        "address": "62 Cypress St. Irwin, PA 15642",
        "status": "Rent",
        "bed": 3,
        "bath": 2.5,
        "price": "$909/Month",
        "image": "https://source.unsplash.com/random/900x800/?house"
      },
      {
        "address": "72 St Paul Drive North Hollywood, CA 91605",
        "status": "Rent",
        "bed": 3,
        "bath": 2.5,
        "price": "$909/Month",
        "image": "https://source.unsplash.com/random/600x800/?house"
      },
      {
        "address": "634 NE. Sage Road Jacksonville, FL 32205",
        "status": "Rent",
        "bed": 3,
        "bath": 2.5,
        "price": "$909/Month",
        "image": "https://source.unsplash.com/random/700x700/?house"
      },
      {
        "address": "50 Surrey St. Oklahoma City, OK 73118",
        "status": "Rent",
        "bed": 3,
        "bath": 2.5,
        "price": "$909/Month",
        "image": "https://source.unsplash.com/random/800x800/?house"
      },
      {
        "address": "51 Grove Street Houston, TX 77060",
        "status": "Rent",
        "bed": 3,
        "bath": 2.5,
        "price": "$909/Month",
        "image": "https://source.unsplash.com/random/900x600/?house"
      }
    ]

    return test.map(listing => {

      return (
        <Listings
          address={listing.address}
          status={listing.status}
          bed={listing.bed}
          bath={listing.bath}
          price={listing.price}
          image={listing.image}
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