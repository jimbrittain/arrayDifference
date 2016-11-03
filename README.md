# Javascript arrayDifference function
arrayDifference javascript function which returns and array of values (ignores keys, iterative), which contain the values from the first array (parameter 1) which do not occur in the second array (parameter 2). Uni-directional, e.g. if second array contains a value that does not appear in the first, that value will not be in the returned array, whilst vice versa if in first but not in second it will be returned. Who, however, is on first.
## Usage
```
    arrayDifference([1,2,3,4,5,6], [1,2,3,4,5]) = [6];
    arrayDifference([1,2,3,4,5], [1,2,3,4,5,6]) = [];
    arrayDifference([1,2,3,4,5,6,7,8,9], [1,2,3,4,5]) = [6,7,8,9];
    arrayDifference([1,2,3,4,5,6,6,6,6], [1,2,3,4,5]) = [6,6,6,6];
```

## Methodology
```
    var arr = [];
    if(isArray(arr1) && isArray(arr2)){
        for(var i=0, imax=arr1.length; i<imax; i+=1){
            var found = false;
            for(var n=0, nmax=arr2.length; n<nmax; n+=1){
                if(arr1[i] === arr2[n]){
                    found = true; break; }}
            if(!found){ arr.push(arr1[i]); }}}
    return arr;
```

## Issues

* Need to look at building a more generic function that can cope with strings, maps, numbers, etc. and with a specification of either uni or bi/pan directional
* Needs proper testing log, e.g. browser checks
* NS version uses IMNS, not currently using ES6 namespacing
