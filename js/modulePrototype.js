//module pattern as a using prototype
(function(app){
    'use strict';
    //bad news if this object is called without 'new'
    app.ModulePrototype = function(defaultValue){
        this.count = defaultValue || 0; //this is public
    };

    // prototype
    app.ModulePrototype.prototype = {
        add: function(amount){
            this.count += amount;
            this.addCalled += 1;
        },
        getValue: function() {
            return this.count;
        },
        addCalled: 0 //public property
    };
}(window.ns));