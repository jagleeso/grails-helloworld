if (typeof jQuery !== 'undefined') {
	(function($) {
		$('#spinner').ajaxStart(function() {
			$(this).fadeIn();
		}).ajaxStop(function() {
			$(this).fadeOut();
		});
	})(jQuery);
}

/* Extend all javascript objects with a generic equals method that works for all builtin types.
 */
Object.prototype.equals = function(y) {
    var x = this;

    var array = function () {
        if (x.length != y.length) { return false; }
        for (var i = 0; i < x.length; i++) {
            if (!x[i].equals(y[i])) {
                return false;
            }
        }
        return true;
    };
    var object = function () {
        var props = function (o) {
            var P = [];
            for (p in o) {
                if (o.hasOwnProperty(p)) {
                    P.push(p);
                }
            }
            return P;
        };
        var xProps = props(x);
        var yProps = props(y);
        debugger;
        if (xProps.length != yProps.length) { return false; }
        for (var i = 0; i < x.length; i++) {
            if (!(y.hasOwnProperty(xProps[i]) && y[xProps[i]].equals(x[xProps[i]]))) {
                return false;
            }
        }
        return true;
    };
    var _default = function () {
        return x == y;
    }
    return (
        (y === null && y === x) ||
        (y === undefined & y === x) || (
            (x instanceof y.constructor) && (
                (x instanceof Array) && array() ||
                (x instanceof Object) && object() ||
                _default()
            )
        )
    );
}

/* Prints "OK" if expect is equal to got, otherwise prints an error message.
 *
 * E.g.
 * assert([1, 2], [1, 2]) // prints "OK"
 * assert([1, 2], [1]) // prints "FAIL: expected 1 but saw 1,2"
 */
function assert(got, expect) {
    if (!( ((expect == undefined || expect == null) && expect == got) || expect.equals(got) )) {
        console.log("FAIL: " + "expected " + expect + " but saw " + got);
    } else {
        console.log("OK");
    }
}

