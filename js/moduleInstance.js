//module pattern not as a singleton (allows for multiple instances)
(function(app) {
    app.moduleInstance = function () {
        var count = 0;
        return {
            add: function (amount) {
                count += amount;
            },
            getValue: function () {
                return count;
            }
        }
    };
}(window.ns));