// Express Route 
const api = require('./api.route.js');
const cors = require("cors");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const corsOptions ={
    origin: "http://localhost:3000",
}
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/api',api);



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});