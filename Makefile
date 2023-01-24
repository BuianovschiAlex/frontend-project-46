install:
	npm ci

gendiff:
	node /bin/gendiff.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage

## Stylish
json-diff:
	gendiff __fixtures__/file1.json __fixtures__/file2.json

yml-yaml-diff:
	gendiff __fixtures__/file1.yml __fixtures__/file2.yaml

json-yaml-diff:
	gendiff __fixtures__/file1.json __fixtures__/file2.yaml

json-yml-diff:
	gendiff __fixtures__/file1.yml __fixtures__/file2.json
	
## Plain
json-diff-plain:
	gendiff --format plain __fixtures__/file1.json __fixtures__/file2.json

yml-yaml-diff-plain:
	gendiff --format plain __fixtures__/file1.yml __fixtures__/file2.yaml

json-yaml-diff-plain:
	gendiff --format plain __fixtures__/file1.json __fixtures__/file2.yaml

json-yml-diff-plain:
	gendiff --format plain __fixtures__/file1.yml __fixtures__/file2.json
