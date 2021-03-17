const express = require("express");
const app = express();

app.use("/weather/", require("../routers/route"));

app.listen(5000, function(req, res){
    console.log("Server is now running on port 5000.");
});