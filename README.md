Give your eyes something to latch onto while scrolling long text content.

##Demo

See it in action [here](http://svarden.se/demo/scroll/).

Sample text from [Alice's Adventures in Wonderland](http://www.gutenberg.org/ebooks/28885) on Project Gutenberg.

##Usage

Include scrollindicator.js and then start it like this:

```javascript
scrollIndicator.init();
```

You may use the following options:

```javascript
// The text container where you want the indicator to appear. Needs to be positioned.
indicateOn: '.main',

// After this many milliseconds the indicator no longer sticks, and starts disappearing.
fadeDelay: 1500,

// CSS class that defines the indicator icon.
icon: 'eye'
```

License
=======

scrollindicator.js is freely distributable under the terms of the MIT license.

Copyright (c) 2013 Jonathan Svärdén

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.