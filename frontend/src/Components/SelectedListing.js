import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const baseUrl = "http://localhost:5000/api";

const SelectedListing = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [listings, setListings] = useState([]);
    useEffect(() => {
        axios.get(`${baseUrl}/listing/${id}`)
            .then(response => {
                setListings(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error(`Error Fetching Listings with id : ${id} `,error);
            })
    },[]);
    return (
        <div className="selected-listing-page">
            <h1>Listings id: {id}</h1>
            <img src={listings.image} alt="image" width={300}/>
            <ul>
                <li>{listings.title}</li>
                <li>{listings.description}</li>
                <li>&#8377;{listings.price}</li>
                <li>{listings.location}</li>
                <li>{listings.country}</li>
                <button onClick={()=>{navigate("/")}}>Back</button>
            </ul>
        </div>
    );
};

export default SelectedListing;