import $ from '../core';

// add class
$.prototype.addClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...classNames);
    }

    return this;
};

// remove class
$.prototype.removeClass = function(...classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...classNames);
    }

    return this;
};

// switch class
$.prototype.toggleClass = function(classNames) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.toggle(classNames);
    }

    return this;
};