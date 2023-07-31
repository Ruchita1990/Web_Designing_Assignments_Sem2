let nos = [1,2,3,4,5];
console.log(nos);
nos.shift();
console.log("nos after shift", nos);
nos.unshift(1);
console.log("nos after unshift", nos);
nos.splice(2,3);
console.log("nos after splice deletion", nos);
nos.splice(2,2,7,8);
console.log("nos after splice addition", nos);
f=["a","b","c"];
console.log(f);
f.splice(1,1,"d","e","f");
console.log("values after addition", f);
g=["x","y","z"];
g.splice(1,2,"b","c");
console.log("values after addition", g);

