var compt = 0;
var res = [];

do {
    var n1 = Math.random() * (7 - 0) + 0;
    var n2 = Math.random() * (7 - 0) + 0;
    
    n1 = Math.trunc(n1);
    n2 = Math.trunc(n2);

    res.push(n1 + n2);
    compt++;
}while(compt != 36000);

console.log("Total: " + res.length + " resultados");
console.log("Las sumas de las tiradas són: "+res);
