'use strict';

var Mandelbrot = (function () {

    var ITERATION_LIMIT = 255;
    var COLOR_LIMIT = 255;
    var ITERATION_EDGE = 2;
    var ITERATOR_START = new Complex(0);

    var f = function (c, x) {
        return Complex.add(Complex.multiply(x, x), c);
    };

    var iterate = function (c) {
        var current = ITERATOR_START, count = 0;
        for (var i = ITERATION_LIMIT; i >= 0; i--) {
            current = f(c, current);
            if (Complex.outOfSquare(current, ITERATION_EDGE)) {
                count = i;
                break;
            }
        }
        return Math.floor(count*COLOR_LIMIT/ITERATION_LIMIT);
    };

    var getCoordinate = function (n, length) {
        return (4*n/length - 2);
    };

    return {
        iterate: iterate,
        getCoordinate: getCoordinate
    };

})();
