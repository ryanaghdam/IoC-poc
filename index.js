var container = require('./dependency');
var letterService = container.letterService;
var numberService = container.numberService;

letterService.printLetter();
numberService.printNumber();
