var scrollIndicator = {

    options: {
        for: '.main',
        fadeDelay: 1000
    },

    create: function(){
        var indicatorElement = document.createElement('span'),
            indicateOn = document.querySelector(this.options.for);

        indicatorElement.classList.add('indicator');

        indicateOn.appendChild(indicatorElement);

        return indicatorElement;

    },

    init: function(){

        var element = this.create(),
            prevYOffset = 0,
            delta = 0;

        function delayedExec(fn, delay){
            var timer;

            return function(){
                delta = window.pageYOffset - prevYOffset;
                element.style.webkitAnimationName = '';
                element.style.top = (window.innerHeight - delta) + 'px';
                timer && clearTimeout(timer);
                timer = setTimeout(fn, delay);
            }
        }

        var movePointer = delayedExec(function(){
            delta  = 0;
            prevYOffset = window.pageYOffset;
            //startFade();
            element.style.webkitAnimationName = 'fade';
            //element.style.top = window.innerHeight + 'px';
        }, this.options.fadeDelay);


        document.addEventListener('scroll', movePointer, false);
    }

};

scrollIndicator.init();