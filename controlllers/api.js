const https = require("https");
exports.api = (req, res) =>{
    const url = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4e8c38b59a1ddf64bff18cb6042a1354";
    https.get(url, function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            res.sendStatus(temp);
        })
    })
}