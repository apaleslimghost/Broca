var cson = require('cson-safe');
var extend = require('util')._extend;

module.exports = function broca(body) {
	var match = body.match(/^---([\s\S]*)---/);
	if(match) {
		return extend({
			body: body.slice(match[0].length).trim()
		}, cson.parse(match[1].trim() || '{}'));
	}

	return {body: body};
}
