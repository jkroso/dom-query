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
  - [query()](#query)
  - [all()](#all)
  - [expand()](#expand)

### query()

  Run a query within a section of the document

### all()

  Select all elements within the document which match the selector
  If you pass a value for `el` the results will be filtered to include
  only those which are children of the `el`

### expand()

  Covert a local query to one which can be run globally with the same results

## Running the tests

Before you can run any tests you will need to execute `$ npm install`

Running the test in node is just a matter of executing `$ make test`

Running in the browser though requires a build. To do that execute `$ make test/built.js`. If all goes well you should then be able to open your browser to the test directory and watch the test suite run.

_Note: these commands don't work on windows._ 

## Contributing
As with all my work this is both a work in progress and a thought in progress. Feel free to chip in in any way you can.

## Release History
_(Nothing yet)_

## License
Copyright (c) 2012 Jakeb Rosoman

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
