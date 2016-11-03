"use strict";
/* global isArray */
/**
 * @function arrayDifference
 * @param arr1 {Array}
 * @param arr2 {Array}
 * @return {Array}
 * @description returns a new array containing any unmatched values from the first array (uni-directional not bi-);
 **/
var arrayDifference = function(arr1, arr2){
    var arr = [];
    if(isArray(arr1) && isArray(arr2)){
        for(var i=0, imax=arr1.length; i<imax; i+=1){
            var found = false;
            for(var n=0, nmax=arr2.length; n<nmax; n+=1){
                if(arr1[i] === arr2[n]){
                    found = true; break; }}
            if(!found){ arr.push(arr1[i]); }}}
    return arr; };
