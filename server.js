
// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

var mongoose = require("mongoose");
var path = require("path");


// Scraping tools
var request = require("request");
var cheerio = require("cheerio");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
//Define port
var port = process.env.PORT || 3000

// Initialize Express
var app = express();