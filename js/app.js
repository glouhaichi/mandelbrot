'use strict';

$(document).ready(function () {
    var getColor = function (i, j) {
        return (i*j % 7 < i*j % 5 ? 'red' : 'yellow');
    };
    var container = $('<div class="container"></div>'), pixel = null, length = 2000;
    console.log('START');
    for (var i = 0; i < length; i++) {
        console.log(i);
        for (var j = 0; j < length; j++) {
            var greyLevel = Mandelbrot.iterate(new Complex(Mandelbrot.getCoordinate(i, length), Mandelbrot.getCoordinate(j, length))).toString(16);
            container.append('<div class="pixel" style="top:' + j + 'px; left:' + i + 'px; background-color:#' + greyLevel + greyLevel + greyLevel + ';"></div>');
        }
    }
    $('body').append(container);
    console.log('END');
});
