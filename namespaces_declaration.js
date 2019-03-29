var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calcCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calcCircumference = calcCircumference;
    function calcRectangle(w, l) {
        return w * l;
    }
    MyMath.calcRectangle = calcRectangle;
})(MyMath || (MyMath = {}));
