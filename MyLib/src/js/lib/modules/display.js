import $ from '../core';

// show element
$.prototype.show = function() {
    for(let i = 0 ;i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = ''; 
    }

    return this;
}

// hide element
$.prototype.hide = function() {
    for(let i = 0 ;i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        this[i].style.display = 'none'; 
    }

    return this;
}

// switch state of the element
$.prototype.toggle = function() {
    for(let i = 0 ;i < this.length; i++) {
        if (!this[i].style) {
            continue;
        }
        if (this[i].style.display === 'none') {
            this[i].style.display = '';
        }  else {
            this[i].style.display = 'none';
        }
    }

    return this;
}