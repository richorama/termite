# termite

Display messages on the screen, and update the state asynchronously.

![Screenshot](https://dl.dropboxusercontent.com/u/624582/github/termite.png)

## Installation 

```
$ npm install termite
```

## Usage

```js
var termite = require('termite');
var update = termite.write("Hello World");

// terminal is updated to show:
// [ .... ] Hello World

update("WAIT");

// terminal is updated to show:
// [ WAIT ] Hello World

update.ok();

// terminal is updated to show:
// [  OK  ] Hello World
```

Multiple messages can be written out, and updated in any order, after any amount of time.
The update function can also be called multiple times, but you won't see the update once it's off the top of the screen.

It support the following convenience methods:

```js
update.ok() 					// outputs 'OK' in green
update.warning() 				// outputs 'WARN' in yellow
update.errror() 				// outputs 'ERROR' in red
update("anything")				// outputs 'anything'
update("anything", "magenta")	// outputs 'anything' in magenta
```
Supported colours include black, red, green, yellow, blue, magenta, cyan, white.

You can adjust the space given for the status update with the `updateSettings` function:

```js
termite.updateSettings({
	placeholderCharacter : "*",
	statusLength : 10
});
```

## Known limitations

* Lines off the top of the screen aren't updated
* Strange things happen when text wraps
* Doesn't play nicely with other things writing to stdout

## License

MIT