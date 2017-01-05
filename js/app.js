'use strict';

$(document).ready(function () {

    var getColor = function (i, j) {
        return (i*j % 7 < i*j % 5 ? 'red' : 'yellow');
    };
    var container = $('body'), pixelName = '', pixel = null, length = 400;
    console.log('START');
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            var greyLevel = Mandelbrot.iterate(new Complex(Mandelbrot.getCoordinate(i, length), Mandelbrot.getCoordinate(j, length))).toString(16);
            pixelName = 'p-' + i + '-' + j;
            container.append('<div class="pixel ' + pixelName + '"></div>');
            $('.' + pixelName).css({
                'top': j,
                'left': i,
                'background-color': '#' + greyLevel + greyLevel + greyLevel
            });
        }
    }
    console.log('END');

});
