var expr1 = "Nací el 05/04/1982 en Donosita";
var regexp1 = /[a-zA-Z0-9 ]* [0-9]{2}\/[0-9]{2}\/[12][0-9]{3}/;

if(regexp1.test(expr1)){
    console.log("Contiene fecha");
}else {
    console.log("No contiene fecha");
}

var expr2 = "arnaumas@gmail.com";
var relexp2 = /[a-zA-Z1-9.-]*@{1}[a-z]*\.([a-z]{2,3})/;

if(relexp2.test(expr2)){
    console.log("Contiene un email");
}else {
    console.log("No contiene un email");
}