var $ = require('jquery');
var Person = require('./modules/Person');

alert("This is a test for webpack");

var john = new Person("John Doe", "blue");
john.greet();
var jane = new Person("Jane Smith", "green");
jane.greet();

