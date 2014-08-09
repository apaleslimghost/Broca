require! levn

module.exports = ->
	if it == /^---([\s\S]*)---/ then {
		body: it.slice that.0.length .trim!
		...(levn.parse \Object that.1.trim!.replace '\n' ', ')
	} else body:it
