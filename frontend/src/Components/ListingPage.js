import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:5000/api";

const ListingPage = () => {
    const [listings, setListings] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`${baseUrl}/listing`)
            .then(response => {
                setListings(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error Fetching Listings",error);
            })
    },[]);
    const handleNewListing = () => {
        navigate("/listing/new");
    };
    return (
        <div className="listing-page">
            <h1>Listings Page</h1>
            <button onClick={()=>{handleNewListing()}}>Create New Listing</button>
            <ul>
                {listings.map((listing, index) => (
                    <li key={index}> <button onClick={() => {navigate(`/listing/${listing._id}`)}}>{listing.title} -- &#8377;{listing.price}</button></li>
                ))}
            </ul>
        </div>
    );
};

export default ListingPage;