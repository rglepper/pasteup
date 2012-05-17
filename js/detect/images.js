/*
    Module: detect/images.js
    Description: Updates image src attributes based on connection speed.
*/
/*jshint strict: false */

define(['../detect/detect.js'], function (detect) {

    function upgrade() {
        if (detect.getConnectionSpeed() !== 'low') {
            var images = document.querySelectorAll('img[data-fullsrc]'); // Leave old browsers.
            for (var i = 0, j = images.length; i<j; ++i) {
                images[i].src = images[i].getAttribute('data-fullsrc');
                images[i].className += ' image-large';
            }
        }
    }

    return {
        'upgrade': upgrade
    };

});