//module pattern as a singleton
(function(app){
    var count = 0;
    app.module = {
        add: function(amount){
            count += amount;
        },
        getValue: function() {
            return count;
        }
    }
}(window.ns));