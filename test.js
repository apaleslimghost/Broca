var broca = require('./index.js');
var expect = require('expect.js');

exports.Broca = {
  'should pass through text with no frontmatter': function() {
    var body = "hello world";
    return expect(broca(body)).to.eql({
      body: body
    });
  },
  'should strip empty frontmatter': function() {
    var body = "---\n---\nhello world";
    return expect(broca(body)).to.eql({
      body: "hello world"
    });
  },
  'should pass frontmatter properties through': function() {
    var body = "---\na: 1\nb: 'hello'\n---\nhello world";
    return expect(broca(body)).to.eql({
      body: "hello world",
      a: 1,
      b: "hello"
    });
  },
  'can parse arrays': function() {
    var body = "---\na: [1, 2, 3]\n---\nhello world";
    return expect(broca(body)).to.eql({
      body: "hello world",
      a: [1, 2, 3]
    });
  },
  'can parse multiline arrays': function() {
    var body = "---\na: [\n	1\n	2\n	3\n]\n---\nhello world";
    return expect(broca(body)).to.eql({
      body: "hello world",
      a: [1, 2, 3]
    });
  }
};
