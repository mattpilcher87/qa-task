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
    it('Should return 200', function(done) {
      request(cityIdOpts).then(function(res) {
        assert.equal(200, res.statusCode);
        done();
      })
    });
  })

  describe('City Name', function() {
    it('Should return name as Portsmouth', function(done) {
      request(cityIdOpts).then(function(res) {
        assert.equal('Portsmouth', res.body.city.name);
        done();
      })
    });

    it('As a string', function(done) {
      request(cityIdOpts).then(function(res) {
        assert.typeOf(res.body.city.name, 'string', 'Its a string');
        done();
      })
    });
  })
});

// Coordinates
describe('Current Weather Tests - Coordinates', function() {
  describe('Status Code', function() {
    it('Should return 200', function(done) {
      request(coordinatesOpts).then(function(res) {
        console.log(res.body.weather)
        assert.equal(200, res.statusCode);
        done();
      })
    });
  })

  describe('Coordinates', function() {
    it('Should return name as Portsmouth', function(done) {
      request(coordinatesOpts).then(function(res) {
        assert.equal('Portsmouth', res.body.name);
        done();
      })
    });

    it('Should return coordinates as an object', function(done) {
      request(coordinatesOpts).then(function(res) {
        assert.typeOf(res.body.coord, 'object');
        done();
      })
    });

    it('Should return the weather as an object', function(done) {
      request(coordinatesOpts).then(function(res) {
        assert.typeOf(res.body.weather, 'array');
        console.log('Weather today is ' + res.body.weather[0].main + ' as ' + res.body.weather[0].description)
        done();
      })
    });
  })
});
