# Schema

Schema validation

## Install

 * via [npm](https://npmjs.org) `npm install alexeyraspopov/schema`
 * via [component](http://component.io) `component install alexeyraspopov/schema`
 * via [bower](http://bower.io) `bower install schema`

## API

	schema(map)

## Usage

	var user = schema({
			name: String,
			age: Number
		});

	user({ name: 'Alex', age: 21 }); // true

	user({ name: false, age: 45 }); // false

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) Alexey Raspopov
