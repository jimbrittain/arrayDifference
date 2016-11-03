"use strict";
var __imns = function(){ return window; }
describe("arrayDifference Test Suite", function(){
    beforeEach(function(done){
        var requireArr = [
            'dist/c/Namespace/Namespace.js',
            'dist/f/isArray/isArray.js'
        ];
        for(var i=0, imax=requireArr.length; i<imax; i+=1){
            var a = document.createElement('script');
            a.src = requireArr[i];
            a.type = 'text/javascript';
            document.body.appendChild(a); 
        }
        setTimeout(function(){ done(); }, 1000);
    });

        var adr = __imns();
        var obj = {}, arr = [];
        var arr1 = [1,2,3,4,5];
        var arr2 = [1,2,3,4,5,6];

    it("arrayDifference is a function", function(){ expect(typeof adr.arrayDifference === 'function').toBe(true); });
    it("arrayDifference: arrayDifference([1,2,3,4,5,6], [1,2,3,4,5]) = [6]", function(){ 
        var a = adr.arrayDifference([1,2,3,4,5,6], [1,2,3,4,5]);
        expect(a.length === 1 && a[0] === 6).toBe(true); });
    it("arrayDifference: arrayDifference([1,2,3,4,5], [1,2,3,4,5,6]) = []", function(){ 
        var a = adr.arrayDifference([1,2,3,4,5], [1,2,3,4,5,6]);
        expect(a.length === 0).toBe(true); });
    it("arrayDifference: arrayDifference([1,2,3,4,5,6,7,8,9], [1,2,3,4,5]) = [6,7,8,9]", function(){ 
        var a = adr.arrayDifference([1,2,3,4,5,6,7,8,9], [1,2,3,4,5]);
        expect(a.length === 4 && a[0] === 6 && a[1] === 7 && a[2] === 8 && a[3] === 9).toBe(true); });
    it("arrayDifference: arrayDifference([1,2,3,4,5,6,6,6,6], [1,2,3,4,5]) = [6,6,6,6]", function(){ 
        var a = adr.arrayDifference([1,2,3,4,5,6,6,6,6], [1,2,3,4,5]);
        expect(a.length === 4 && a[0] === 6 && a[1] === 6 && a[2] === 6 && a[3] === 6).toBe(true); });
});
