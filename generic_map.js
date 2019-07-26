var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    MyMap.prototype.setItem = function (key, item) {
        // create a new key-value pair
        this.map[key] = item;
    };
    MyMap.prototype.getItem = function (key) {
        // retrieve the value of the provided key
        return this.map[key];
    };
    MyMap.prototype.clear = function () {
        // remove all key-value pairs
        this.map = {};
    };
    MyMap.prototype.printMap = function () {
        // output key-value pairs
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
