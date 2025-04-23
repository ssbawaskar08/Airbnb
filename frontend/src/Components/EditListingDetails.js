import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ListingForm from "./ListingForm";

const baseUrl = "http://localhost:5000/api";

const EditListingDetails = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [listingData, setListingData] = useState()
    useEffect(() => {
        axios.get(`${baseUrl}/listing`)
            .then(response => {
                setListingData(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error Fetching Listings",error);
            })
    },[]);
    const handleNewListing = () => {
        navigate("/listing/new",{ state: { mode: "EDIT" } });
    };

    return (
        <div className="listing-page">
            {listingData && (
                <ListingForm
                    initialsValues={listingData}
                    onSubmit={onSubmitHandler}
                    enableReintialize={true}
                >
                    Update Listing Details 
                </ListingForm>
            )}
        </div>
    );
};

export default EditListingDetails;