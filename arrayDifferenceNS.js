"use strict";
/* global __imns */
var adr = __imns('util.tools');
// var adr = window; //for stand-alone delete above and uncomment this line
if(!('arrayDifference' in adr)){


    adr.arrayDifference = function(arr1, arr2){
        var arr = [], uv = __imns('util.validation');
        if(uv.isArray(arr1) && uv.isArray(arr2)){
            for(var i=0, imax=arr1.length; i<imax; i+=1){
                var found = false;
                for(var n=0, nmax=arr2.length; n<nmax; n+=1){
                    if(arr1[i] === arr2[n]){
                        found = true; break; }}
                if(!found){ arr.push(arr1[i]); }}}
        return arr; };


}
