require! {
	broca: './index.js'
	'expect.js'
}

export 'Broca':
	'should pass through text with no frontmatter': ->
		body = "hello world"
		expect broca body .to.eql {body}
	'should strip empty frontmatter': ->
		body = """
		---
		---
		hello world"""
		expect broca body .to.eql body:"hello world"
	'should pass frontmatter properties through': ->
		body = """
		---
		a: 1
		b: 'hello'
		---
		hello world"""
		expect broca body .to.eql body:"hello world" a:1 b:"hello"
	'can parse arrays': ->
		body = """
		---
		a: [1, 2, 3]
		---
		hello world"""
		expect broca body .to.eql body:"hello world" a:[1 2 3]
	'can parse multiline arrays': ->
		body = """
		---
		a: [
			1
			2
			3
		]
		---
		hello world"""
		expect broca body .to.eql body:"hello world" a:[1 2 3]
