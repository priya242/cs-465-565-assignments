"use strict";
exports.__esModule = true;
var Puppy = /** @class */ (function () {
    function Puppy(name) {
        this.name = name;
        //  Later we'll have code here 
    }
    Puppy.prototype.bark = function () {
        return 'Gav! my name is ' + this.name;
    };
    return Puppy;
}());
exports.Puppy = Puppy;
var hotdog = new Puppy('Édouard');
console.log(hotdog.bark());
//  Let's create more puppies 
var oscar = new Puppy('Oscar-Claude');
console.log(oscar.bark());
