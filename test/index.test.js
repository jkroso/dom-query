var should = require('chai').should()
  , query = require('../src')

function q (s, e) {
	return [].slice.call(query(s, e))
}

function all (s, e) {
	return [].slice.call(query.all(s, e))
}

describe('query(selector [, context])', function () {
   it('without a context it should return all matching', function () {
   	q('#a > #b').should.deep.equal([b])
   	q('#a > *').should.deep.equal([b])
   	q('#a').should.deep.equal([a])
   })
   it('should run within the given context', function () {
   	q('#b', a).should.deep.equal([b])
   	q('#a > #b', a).should.deep.equal([])
   	q('div div', dom).should.deep.equal([b])
   })
})

describe('query.all(selector [, context])', function () {
	it('should run the query globally but only return children of the context node', function () {
		all('#a > #b', a).should.deep.equal([b])
		all('#b').should.deep.equal([b])
		all('#b', b).should.deep.equal([])
	})
})

describe('query.expand(selector [, context])', function () {
   it('should return a global query that can only match nodes within the context', function () {
      query.expand('#b', a).should.equal('#a #b')
      query.expand('#b').should.equal('html > body #b')
   })
})
