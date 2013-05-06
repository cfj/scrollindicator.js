/*!
 * scrollindicator.js
 * http://svarden.se/demo/scroll/
 * MIT licensed
 *
 * Copyright (C) 2013 Jonathan Svärdén, http://svarden.se
 */
(function(){
    'use strict';

    var scrollIndicator = {

        options: {

            // The text container where you want the indicator to appear. Needs to be positioned.
            indicateOn: '.main',

            // After this many milliseconds the indicator no longer sticks, and starts disappearing.
            fadeDelay: 1500,

            // CSS class that defines the indicator icon.
            icon: 'eye'
        },

        // Poor man's options extend.
        extend: function(options){
                    var prop;
                    for( prop in options ){
                      if( prop in this.options ){
                        this.options[prop] = options[prop];
                    }
                }
            },

        create: function(options){

            if(options){
                this.extend(options);
            }

            var indicatorElement = document.createElement('span'),
                indicateOn = document.querySelector(this.options.indicateOn);

            indicatorElement.classList.add('indicator');
            indicatorElement.classList.add(this.options.icon);
            indicatorElement.style.top = window.innerHeight + window.pageYOffset - 23 + 'px';

            indicateOn.appendChild(indicatorElement);

            return indicatorElement;
        },

        init: function(options){
            var indicator = this.create(options),
                scrolling = false;

            function delayedExec(fn, delay){
                var timer,
                    yOffset = window.pageYOffset;
                
                return function(){
                    if(!scrolling){
                        indicator.style.top = window.innerHeight + yOffset - 23 + 'px';
                        scrolling = true;
                    }

                    yOffset = window.pageYOffset;

                    indicator.style.webkitAnimationName = '';
                    indicator.style.MozAnimationName = '';
                    indicator.style.animationName = '';

                    clearTimeout(timer);
                    timer = setTimeout(fn, delay);
                };
            }

            var updatePosition = delayedExec(function(){
                    scrolling = false;

                    indicator.style.webkitAnimationName = 'fade';
                    indicator.style.MozAnimationName = 'fade';
                    indicator.style.animationName = 'fade';

                }, this.options.fadeDelay);

            document.addEventListener('scroll', updatePosition, false);
        }
    };

    scrollIndicator.init();
}());