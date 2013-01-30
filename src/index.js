var unique = require('unique-selector')

/**
 * Run a query within a section of the document
 *
 * @param {String} selector
 * @param {Element} context
 * @return {NodeList}
 */

function query (selector, context) {
	if (context) {
		selector = unique(context) + ' ' + selector
	}
	return document.querySelectorAll(selector)
}

/**
 * Select all elements within the document which match the selector
 * If you pass a value for `el` the results will be filtered to include
 * only those which are children of the `el`
 *
 * @param {String} selector a CSS selector
 * @param {Element} [context] defaults to document
 * @return {NodeList}
 */

function all (selector, context) {
	return (context ||document).querySelectorAll(selector)
}

/**
 * Covert a local query to one which can be run globally with the same results
 *
 * @param {String} selector
 * @param {Element} context
 * @return {String}
 */

function expand (selector, context) {
	return unique(context || document.body) + ' ' + selector
}

module.exports = query
query.all = all
query.expand = expand