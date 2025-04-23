const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./database/db');
router.use(express.urlencoded({ extended: true }));
const listing = require("./database/modules/lisiting");

router.get("/", (req, res)=> {
    res.send("Hi this is the root  structure.");
});
router.get("/listing", async (req, res) => {
    try {
        const results = await listing.find({});
        res.status(200).json(results);  // Ensure data is sent in proper JSON format
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch listings", details: error.message });
    }
});
//New Listing
router.post("/listing/new", async (req, res) => {
    const { title, description, price, location, country } = req.body;
    try {
        listing.insertOne({title:title, description:description,image:"", price, location, country})
        res.status(200).json({message:"Listing added succesfully",title});
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch listings", details: error.message });
    }
});
// get selected listings data. 
router.get("/listing/:id", async (req, res) => {
    const { id } = req.params;  // Ensure id is correctly extracted as a string
    console.log("Request ID:", id);

    try {
        const results = await listing.findById(id);  // No need to convert manually
        console.log(results);

        if (!results) {
            return res.status(404).json({ error: "Listing not found" });
        }

        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching listing:", error);
        res.status(500).json({ error: "Failed to fetch listing", details: error.message });
    }
});
router.get("/listing/:id/edit", async (req, res) => {
    const { id } = req.params; 
    const listing = req.body; // Ensure id is correctly extracted as a string
    console.log("Request ID:", id);

    try {
        const results = await listing.findById(id);  // No need to convert manually
        console.log(results);

        if (!results) {
            return res.status(404).json({ error: "Listing not found" });
        }

        res.status(200).json(results);
    } catch (error) {
        console.error("Error fetching listing:", error);
        res.status(500).json({ error: "Failed to fetch listing", details: error.message });
    }
});


module.exports = router;