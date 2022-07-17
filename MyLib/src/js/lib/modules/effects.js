import $ from '../core';

// init animation
$.prototype.animateOverTime = function(duration, callback, final) { 
    let timeStart;    

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;     
        }
        
        let timeProgress = time - timeStart;  
        let complection = Math.min(timeProgress / duration, 1); 

        callback(complection); 

        if (timeProgress < duration) {
            requestAnimationFrame(_animateOverTime); 
        } else { 
            if (typeof final === 'function') {
                final();
            }
        }
    }

    return _animateOverTime;
};

// fade in
$.prototype.fadeIn = function(duration, display, final) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block'; 

        const _fadeIn = (complection) => {     
            this[i].style.opacity = complection;
        };

        const anim = this.animateOverTime(duration, _fadeIn, final);
        requestAnimationFrame(anim);
    }

    return this;
};

// fade out
$.prototype.fadeOut = function(duration, final) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection; 
            if (complection === 1) {            
                this[i].style.display = 'none';
            }
        };

        const anim = this.animateOverTime(duration, _fadeOut, final);
        requestAnimationFrame(anim);
    }

    return this;
};

// toggle fade
$.prototype.fadeToggle = function (duration, display, final) {
    for (let i =0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            this[i].style.display = display || 'block';

            const _fadeIn = (complection) => {
                this[i].style.opacity = complection;
            };

            const anim = this.animateOverTime(duration, _fadeIn, final);
            requestAnimationFrame(anim);
            
        } else {
            const _fadeOut = (complection) => {
                this[i].style.opacity = 1 - complection; 
                if (complection === 1) {        
                    this[i].style.display = 'none';
                }
            };
            
            const anim = this.animateOverTime(duration, _fadeOut, final);
            requestAnimationFrame(anim);
        }
    }

    return this;
};