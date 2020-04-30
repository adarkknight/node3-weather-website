const request = require('request');
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1b26b7d24243bffc2bf84d6f58bd07e8/' + latitude + ',' + longitude
    request({ url, json: true }, (error, { body }) => {
        console.log('')
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log('This is body', JSON.stringify(body));
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.' + 'You will see a high of ' + body.daily.data[0].temperatureHigh + ', and a low of ' + body.daily.data[0].temperatureLow + '.')
        }
    })
}

module.exports = forecast