# dom-query

Utilities for selecting DOM elements.  

Because the semantics of `querySelectorAll` are weird. I'm happy with x-browser support for `.querySelectorAll()` so this is not intended to be a shim.

Given this slice of DOM:

```html
<div id="a">
	<div id="b"></div>
</div>
```
I would expect the following to return an empty Array
```js
a.querySelectorAll('#a > #b') // => [b]
```
Instead though it will return `[<div id="b"></div>]`. 

This is because the semantic of `querySelectorAll` is such that it runs the query globally then filters out all results that aren't children of the context Element. My intuition was that it would use the context Element as the base for the actual query, i.e. effectively make the context Element the root of the document for the sake of the query.

## Getting Started

_With component(1)_  

	$ component install jkroso/dom-query --save

_With Node.js_  

	$ npm install jkroso/dom-query --save

Then its a good idea to add dom-query to your `bundledDependencies` array in your package.json file if you are planning to publish. This is just until npm completes its support for github packages.

## Basic Usage

```javascript
query('div', a) // => [<div id="b"></div>]
```

## API

```javascript
var dom-query = require('dom-query')
```
