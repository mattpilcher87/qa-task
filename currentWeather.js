
// module.exports = {
//   cityName: function() {
//     return 'hello'
//   }
// }

// var API_KEY = 'ab233fe641b95e80d70db1e9c5082390'
//
// exports.cityName = function() {
//   const request = require('request');
//   const options = {
//     url: 'http://api.openweathermap.org/data/2.5/forecast?id=2639996&APPID=' + API_KEY,
//     json: true,
//     method: 'get'
//   }
//   request(options, function (error, response, body) {
//     // console.log('error:', error); // Print the error if one occurred
//     // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body.city.name); // Print the HTML for the Google homepage.
//
//     if (!error && response.statusCode == 200) {
//       return body.city.name
//     }
//     else {
//       return ('Error', error
//     }
//   });
// }


exports.test = function() {
  var options = {
      uri: 'http://api.openweathermap.org/data/2.5/forecast?id=2639996&APPID=ab233fe641b95e80d70db1e9c5082390',
      json: true // Automatically parses the JSON string in the response
      // resolveWithFullResponse: true
  };

rp(options)
  .then(function (response) {
    console.log('results', response.statusCode);
    return response
  })
  .catch(function (err) {
    // API call failed...
  });
  // return 200
}
