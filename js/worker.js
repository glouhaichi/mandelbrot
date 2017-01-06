'use strict';

importScripts('complex.js');
importScripts('mandelbrot.js');

self.onmessage = function (e) {
    var data = '', start = e.data.partialLength * e.data.id, end = e.data.partialLength * (e.data.id + 1);
    for (var i = start; i < end; i++) {
        for (var j = 0; j < e.data.totalLength; j++) {
            var greyLevel = Mandelbrot.iterate(new Complex(Mandelbrot.getCoordinate(i, e.data.totalLength), Mandelbrot.getCoordinate(j, e.data.totalLength))).toString(16);
            data += '<div style="width: 1px;height: 1px;position: absolute;top:' + j + 'px; left:' + i + 'px; background-color:#' + greyLevel + greyLevel + greyLevel + ';"></div>';
        }
    }
    console.log(e.data.id, data.length);
    self.postMessage({
        id: e.data.id,
        data: data
    });
    self.close();
};
