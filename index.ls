require! \cson-safe

module.exports = ->
	if it == /^---([\s\S]*)---/ then {
		body: it.slice that.0.length .trim!
		...cson-safe.parse (that.1.trim! or '{}')
	} else body:it
