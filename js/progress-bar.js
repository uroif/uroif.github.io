"use strict";

//Loading Progress Bar
var bar1 = new ProgressBar.Line(progressbar1, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#333333',
    trailColor: '#aaaaaa',
    trailWidth: 3,
    svgStyle: {width: '100%', height: '100%'}
});
var bar2 = new ProgressBar.Line(progressbar2, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#333333',
    trailColor: '#aaaaaa',
    trailWidth: 3,
    svgStyle: {width: '100%', height: '100%'}
});
var bar3 = new ProgressBar.Line(progressbar3, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#333333',
    trailColor: '#aaaaaa',
    trailWidth: 3,
    svgStyle: {width: '100%', height: '100%'}
});
var bar4 = new ProgressBar.Line(progressbar4, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#333333',
    trailColor: '#aaaaaa',
    trailWidth: 3,
    svgStyle: {width: '100%', height: '100%'}
});

bar1.animate(0.8);  // Number from 0.0 to 1.0
bar2.animate(0.8);  // Number from 0.0 to 1.0
bar3.animate(0.9);  // Number from 0.0 to 1.0
bar4.animate(0.9);  // Number from 0.0 to 1.0
