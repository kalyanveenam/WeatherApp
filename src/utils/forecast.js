const request = require('request')
const forecast = (coordinates, forecastcallback) => {
    const url = "https://api.darksky.net/forecast/54217a9d8dee84292f88d621725d9415/" + coordinates;

    request({ url, json: true }, (error, response) => {

        if (error) {
            forecastcallback("No internet connection", undefined);

        }
        else {
            const temp = response.body.currently.temperature;
            const tempCel = (temp - 32) * 5 / 9
            const summ = response.body.daily.data[0].summary;
            const rainProb = response.body.currently.precipProbability;
            //  const minsummary = response.body.minutely.summary;
            //  console.log("from-->"+tempCel)
            retrievedData = {
                tempCel: tempCel,
                summ: summ,
                rainProb: rainProb,
                //  minsummary: minsummary

            }
            forecastcallback(undefined, retrievedData)
        }
    })
}
module.exports = forecast