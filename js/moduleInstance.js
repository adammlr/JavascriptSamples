//module pattern not as a singleton (allows for multiple instances)
(function(app) {
    'use strict';
    app.moduleInstance = function (defaultValue) {
        //Do NOT use 'this' keyword here!
        var count = defaultValue || 0; // private variable
        return {
            add: function (amount) {
                count += amount;
                this.addCalled += 1; //ok to use 'this' here
            },
            getValue: function () {
                return count;
            },
            addCalled: 0 //public property
        }
    };
}(window.ns));