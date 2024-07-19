install:
	npm ci

lint:
	npx eslint .

gendiff:
	node bin/gendiff.js

publish:
	npm publish

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8