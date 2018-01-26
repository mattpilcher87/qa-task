const assert = require('chai').assert
const request = require('request-promise');

const API_KEY = 'ab233fe641b95e80d70db1e9c5082390'
const cityID = '2639996'
const coordinates = {
  lat: '50.795574',
  lon: '-1.108517'
}

const cityIdOpts = {
    uri: 'http://api.openweathermap.org/data/2.5/forecast?id=' + cityID + '&APPID=' + API_KEY,
    json: true,
    resolveWithFullResponse: true
};

const coordinatesOpts = {
    uri: 'http://api.openweathermap.org/data/2.5/weather?lat=' + coordinates.lat + '&lon=' + coordinates.lon + '&APPID=' + API_KEY,
    json: true,
    resolveWithFullResponse: true
};

const zipOpts = {
    uri: 'http://api.openweathermap.org/data/2.5/weather?lat=' + coordinates.lat + '&lon=' + coordinates.lon + '&APPID=' + API_KEY,
    json: true,
    resolveWithFullResponse: true
};

console.log('CityId', cityIdOpts.uri)
console.log('Coordinates', coordinatesOpts.uri)

// CityID
describe('Current Weather Tests - cityID', function() {
  describe('Status Code', function() {
    it('Should return 200', function() {
      return request(cityIdOpts).then(function(res) {
        assert.equal(200, res.statusCode);
      })
    });
  })

  describe('City Name', function() {
    it('Should return name as Portsmouth as a string', function() {
      return request(cityIdOpts).then(function(res) {
        assert.equal('Portsmouth', res.body.city.name);
        assert.typeOf(res.body.city.name, 'string');
      })
    });
  })
});

// Coordinates
describe('Current Weather Tests - Coordinates', function() {
  describe('Status Code', function() {
    it('Should return 200', function() {
      return request(coordinatesOpts).then(function(res) {
        console.log(res.body)
        assert.equal(200, res.statusCode);
      })
    });
  })

  describe('Coordinates', function() {
    it('Should return name as Portsmouth As a String', function() {
      return request(coordinatesOpts).then(function(res) {
        assert.equal('Portsmouth', res.body.name);
        assert.typeOf(res.body.name, 'string');
      })
    });

    it('Should return correct coordinates to one decimal as an object', function() {
      return request(coordinatesOpts).then(function(res) {
        assert.equal(res.body.coord.lon, -1.11)
        assert.equal(res.body.coord.lat, 50.8)
        assert.typeOf(res.body.coord, 'object');
      })
    });

    it('Should return the weather as an object', function() {
      return request(coordinatesOpts).then(function(res) {
        assert.typeOf(res.body.weather, 'array');
        console.log('Weather today is ' + res.body.weather[0].main + ' as ' + res.body.weather[0].description)
      })
    });
  })
});
