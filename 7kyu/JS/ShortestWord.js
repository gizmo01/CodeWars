/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s){
let res = s.split(' ');
res.sort(function compare(a,b){return a.length-b.length});
return res[0].length;
}
