# Broca [![Build Status](https://travis-ci.org/quarterto/Broca.svg?branch=master)](https://travis-ci.org/quarterto/Broca)

CSON frontmatter parser.

```shell
npm install broca
```

![Broca's area](https://cloud.githubusercontent.com/assets/631757/15262544/121413ba-195b-11e6-870a-139a0ef9361d.jpg)

## Usage

```javascript
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
MIT
