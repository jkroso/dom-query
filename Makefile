EXPORT=dom-query
SRC = src/*
GRAPH = node_modules/.bin/sourcegraph.js src/index.js --plugins=javascript
BIGFILE = node_modules/.bin/bigfile --export $(EXPORT)
REPORTER=spec

all: test/built.js Readme.md

dist:
	@mkdir dist

dist/dom-query.min.js: $(SRC)
	@$(GRAPH) | $(BIGFILE)\
		--production > dist/Laissez-faire.min.js

dist/dom-query.js: $(SRC)
	@$(GRAPH) | $(BIGFILE) > dist/dom-query.js

dist/dom-query.min.js.gz: dist/dom-query.min.js
	@gzip --best -c dist/dom-query.min.js > dist/dom-query.min.js.gz

browser: clean dist dist/dom-query.js.gz dom-query.js

test:
	@node_modules/.bin/mocha test/*.test.js -R $(REPORTER)

clean:
	@rm -rf dist
	@rm -rf tests/built.js

test/built.js: $(SRC) test/*
	@node_modules/.bin/sourcegraph.js test/browser.js \
		--plugins mocha,nodeish,javascript \
		| node_modules/.bin/bigfile \
		 	--leave-paths \
		 	--export null \
		 	--plugins nodeish > test/built.js

Readme.md: $(SRC) docs/*
	@cat docs/head.md > Readme.md
	@cat src/index.js \
	| sed s/.*=.$$// \
	| dox -a | sed s/^\#\#/\#\#\#/ >> Readme.md
	@cat docs/tail.md >> Readme.md

.PHONY: all test clean debug inspect browser
