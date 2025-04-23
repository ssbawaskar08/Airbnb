import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormGroup, Button } from "react-bootstrap";

const baseUrl = "http://localhost:5000/api";

export default function ListingForm(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const mode = location.state?.mode || "NEW";
    const { id } = useParams(); // Get listing ID from URL params
    const [initialValues, setInitialValues] = useState({
        title: "",
        description: "",
        price: "",
        location: "",
        country: ""
    });

    useEffect(() => {
        if (mode === "EDIT" && id) {
            axios.get(`${baseUrl}/listing/${id}`)
                .then((response) => {
                    setInitialValues(response.data);
                })
                .catch((error) => console.log("Error fetching listing", error));
        }
    }, [mode, id]);

    const addListing = (values) => {
        console.log("Submitted values:", values);
        axios.post(`${baseUrl}/listing/new`, values)
            .then(() => {
                alert("Listing Created Successfully");
                navigate("/");
            }).catch((err) => console.log("Error occurred while adding listing", err));
    };

    const updateListing = (values) => {
        console.log("Updating with the following values:", values);
        axios.put(`${baseUrl}/listing/${id}/edit`, values)
            .then(() => {
                alert("Listing Updated Successfully");
                navigate("/");
            }).catch((error) => console.log("Error occurred while updating listing", error));
    };

    const handleSubmit = (values) => {
        if (mode === "EDIT") {
            updateListing(values);
        } else {
            addListing(values);
        }
    };

    return (
        <div>
            <h1>{mode === "EDIT" ? "Edit Listing" : "New Listing"}</h1>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={Yup.object().shape({
                    title: Yup.string().required("Title is required"),
                    description: Yup.string().max(1000, "Must be 1000 characters or less"),
                    price: Yup.number().positive().required("Price is required"),
                    location: Yup.string().required("Location is required"),
                    country: Yup.string().required("Country is required"),
                })}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <label htmlFor="title">Enter Title for your Listing:</label>
                            <Field name="title" type="text" className="form-control" />
                            <ErrorMessage name="title" component="div" className="invalid-feedback" />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="description">Enter Listing Description:</label>
                            <Field name="description" as="textarea" className="form-control" />
                            <ErrorMessage name="description" component="div" className="invalid-feedback" />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="price">Enter Listing Price:</label>
                            <Field name="price" type="number" className="form-control" />
                            <ErrorMessage name="price" component="div" className="invalid-feedback" />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="location">Enter Listing Location:</label>
                            <Field name="location" type="text" className="form-control" />
                            <ErrorMessage name="location" component="div" className="invalid-feedback" />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="country">Enter Listing Country:</label>
                            <Field name="country" type="text" className="form-control" />
                            <ErrorMessage name="country" component="div" className="invalid-feedback" />
                        </FormGroup>

                        <Button variant="primary" type="submit">
                            {mode === "EDIT" ? "Update Listing" : "Create Listing"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}