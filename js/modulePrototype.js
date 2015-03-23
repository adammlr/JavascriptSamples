//module pattern as a using prototype
(function(app){
    app.ModulePrototype = function(){
        this.count = 0;
    };

    // prototype
    app.ModulePrototype.prototype = {
        add: function(amount){
            this.count += amount;
        },
        getValue: function() {
            return this.count;
        }
    };
}(window.ns));