
var body = document.body,
    html = document.documentElement;

var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);



var line = document.getElementById('line');












// document.addEventListener('scroll', function(){
//     console.log('scrolling');
//     line.style.top = window.pageYOffset+750 + 'px';
// }, false);


var yOffset = 0, delta = 0;

var delayedExec = function(after, fn) {
    var timer;
    return function() {
        timer && clearTimeout(timer);
        console.log('scrolling');
        delta = window.pageYOffset - yOffset;
        line.style.top = (window.innerHeight - delta) + 'px';
        console.log('delta: ' + delta);
        timer = setTimeout(fn, after);
    };
};

var scrollStopper = delayedExec(500, function() {
    console.log('stopped it');
    delta = 0;
    yOffset = window.pageYOffset;
    line.style.top = window.innerHeight + 'px';
    console.log('yOffset: ' + yOffset)
});

document.addEventListener('scroll', scrollStopper);