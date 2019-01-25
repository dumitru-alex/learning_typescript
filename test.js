"use strict";
exports.__esModule = true;
var input = "file1.txt, file2.txt,file3.txt";
var fileNamesStringArray = input.split(",");
fileNamesStringArray.forEach(function (element, index) {
    fileNamesStringArray[index] = element.trim();
});
var fileString = {
    binary: false,
    fileNames: fileNamesStringArray
};
console.log(fileString);
