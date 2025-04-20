const mongoose = require("mongoose");
const initData = require("./sampleData.js");
const Listing = require("./modules/lisiting.js");

db().then((res) => {
    console.log("connection established")
  }).catch((err) => {
    console.log(err)
});
  
async function db() {
    await mongoose.connect('mongodb://127.0.0.1:27017/AirBnb');      
}
// const initDB = async () => {
//   await Listing.deleteMany({});
//   await Listing.insertMany(initData.data);
//   console.log("data was initialized");
// };
// initDB();
module.exports = db;