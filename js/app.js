'use strict';

$(document).ready(function () {
    var length = 400;
    var container = $('<div></div>');
    console.log('START');
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            var greyLevel = Mandelbrot.iterate(new Complex(Mandelbrot.getCoordinate(i, length), Mandelbrot.getCoordinate(j, length))).toString(16);
            container.append('<div style="width: 1px;height: 1px;position: absolute;top:' + j + 'px; left:' + i + 'px; background-color:#' + greyLevel + greyLevel + greyLevel + ';"></div>');
        }
    }
    $('body').append(container);
    console.log('END');
});
