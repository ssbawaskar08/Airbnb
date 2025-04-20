import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormGroup, Button } from "react-bootstrap";

const baseUrl = "http://localhost:5000/api";

export default function ListingForm() {
    // const {initialValues, onSubmit} = props; //will use this later in EDIT route
    // const list = props.initialValues.listing?.[0] || {};
    const navigate = useNavigate();
    useEffect(()=> {
        console.log("This is the NewListings component");
    });
    const addListing = (values) => {
        console.log("Submitted values:", values);
        axios.post(`${baseUrl}/listing/new`,values)
            .then((response) => {
                alert("Listing Created Succesfully");
                navigate("/");
            }).catch(err => console.log("Error occures while adding Listing",err))
    };
    return (
        <div>
            <h1> New Listing </h1>
            <Formik
                initialValues={{
                    title: "",
                    description: "",
                    price: "",
                    location: "",
                    country: ""
                }}
                validationSchema={Yup.object().shape({
                    title: Yup.string().required("Title is required"),
                    description: Yup.string().max(1000, "Must be 1000 characters or less"),
                    price: Yup.number().positive().required("Price is required"),
                    location: Yup.string().required("Location is required"),
                    country: Yup.string().required("Country is required"),
                })}                
                onSubmit={addListing}
            >
            {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <label htmlFor="title">Enter Title for your Listing: </label>
                    <Field name="title" type="text" className="form-control" />
                    <ErrorMessage name="title" component="div" className="invalid-feedback" />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="description">Enter Listing Description: </label>
                    <Field name="description" as="textarea" className="form-control" />
                    <ErrorMessage name="description" component="div" className="invalid-feedback" />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="price">Enter Listing Price: </label>
                    <Field name="price" type="number" className="form-control" />
                    <ErrorMessage name="price" component="div" className="invalid-feedback" />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="location">Enter Listing Location: </label>
                    <Field name="location" type="text" className="form-control" />
                    <ErrorMessage name="location" component="div" className="invalid-feedback" />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="country">Enter Listing Country</label>
                    <Field name="country" type="text" className="form-control" />
                    <ErrorMessage name="country" component="div" className="invalid-feedback" />
                </FormGroup>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            )}
            </Formik>

        </div>
    )
}   