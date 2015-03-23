//module pattern as a singleton
(function (app) {
    'use strict';
    var count = 0; //private variable
    app.module = {
        add: function (amount) {
            count += amount;
            this.addCalled += 1;
        },
        getValue: function () {
            return count;
        },
        addCalled: 0 //public property
    }
}(window.ns));