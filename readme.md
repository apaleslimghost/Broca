# Broca

Lightweight CSON frontmatter parser.

```
npm install broca
```

![Broca's area](http://readingforensics.files.wordpress.com/2013/05/brocas-area-2.jpg)

## Usage
(pretending that Javascript has multiline strings)

```
var broca = require('broca');
var str = `
---
a: 1
b: 'hello'
c: [1, 2, 3]
---

hello world
`;

broca(str); //⇒ {a: 1, b:'hello', c:[1,2,3], body:'hello world'}
```

## API
#### `broca :: String → ∀ r. { body :: String | r }`
Takes a string, returns an object containing at least a `body`, and whatever properties it parses from the frontmatter.

## Licence
MIT. &copy; 2014 Matt Brennan.
