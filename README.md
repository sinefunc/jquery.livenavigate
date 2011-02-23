Livenavigate
============

#### In-page navigation that doesn't break the back button and actually changes the URL.

What it solves
--------------

The usual approach to single-page apps are URL's like
`http://domain.com/#!1938/article`. Livenavigate does the same thing,
except that it your URL will be `http://domain.com/1938/article`, yet
everything will be in-place via AJAX.

This is only supported if your browser supports history states (FF4/Safari).
Don't worry though--it will fallback to the hashbang method otherwise.

For hashbang URL's, this relies on the awesome jQuery.hashListen. It
uses the hash change event, and falls back to window timers if it's not
available.

End result: in-place navigation with nice URL's, no matter what browser.

Usage
-----

    /* Bind this to like, say, <a> links */
    $.navigate('/admin/products');

If the history states are available (Safari/FF4), it will change the actual URL
of the page, yet still /not/ load the URL directly (but instead just trigger the
`navigate` event).

    /* Here's how you listen to new pages */
    $(window).bind('navigate', function (e, href) {
      /* href == '/admin/products' */
    });

If history states are not available, it will fall back to hashListen.

Hashlisten
----------

This includes a separate plugin hashListen. See README.hashlisten.md for
notes on what it is.

Authors
-------

Hashlisten is authored and maintained by Rico Sta. Cruz of Sinefunc, Inc.
See more of our work on [www.sinefunc.com](http://www.sinefunc.com)!

Copyright
---------

Copyright (c) 2010-2011 Rico Sta. Cruz and Sinefunc, Inc.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
