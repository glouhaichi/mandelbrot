'use strict';

$(document).ready(function () {
    console.log('START');
    var totalLength = 1500, count = 15, workers = [], allData = [], workersDone = 0;
    for (var i = 0; i < count; i++) {
        workers.push(new Worker('js/worker.js'));
        workers[i].onmessage = function (e) {
            allData[e.data.id] = e.data.data;
            workersDone++;
        };
        workers[i].postMessage({
            id: i,
            totalLength: totalLength,
            partialLength: totalLength / count
        });
    }
    var interval = setInterval(function () {
        if (workersDone === count) {
            $('body').append(allData.join(''));
            console.log('END');
            clearInterval(interval);
        }
    }, 200);

});
