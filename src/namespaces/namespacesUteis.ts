import _ from 'lodash';

_.mul = function(array: number[]): number {
    return array.reduce((ac,val) => ac * val, 1);
}

const arr = [1,2,3,4,5,7];

global.MINHAGLOBAL = 'wowow';

console.log(_.sum(arr));
console.log(_.min(arr));
console.log(_.max(arr));
console.log(_.mean(arr));
console.log(_.mul(arr));
console.log(global.MINHAGLOBAL);

