import { IUploadMap } from "./test2";


var input = "file1.txt, file2.txt,file3.txt";
var fileNamesStringArray = input.split(",");

fileNamesStringArray.forEach(function(element,index) {
    fileNamesStringArray[index] = element.trim()
});
let fileString: IUploadMap = {
    binary: false,
    fileNames : fileNamesStringArray
};

console.log(fileString);