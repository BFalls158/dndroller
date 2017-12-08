// Boilerplate plate stuff. Everything we do here is basically just added to the alexa object and is exported for the Lambda Function on aws

var Alexa = require('alexa-sdk')

exports.handler = function(event, context, callback){
	var alexa = Alexa.handler(event, context, callback)
}

/*
Example from https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs#installing-and-working-with-the-alexa-skills-kit-sdk-for-nodejs-alexa-sdk
Looks simple enough. Intents can be set up online in the ASK development enviroment, or via json. I am going to include their example intent,
which will also have the defaults listed.
*/
var handlers = {

	'HelloWorldIntent': function () {
			this.emit(':tell', 'Hello World!')
	}

}