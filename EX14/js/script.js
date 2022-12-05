function equal() {
    if (c.d.value == "") {
        var eq = "";
    } else {
        var eq = eval(c.d.value);
    }
    c.d.value = eq;
}

function concat(n) {
    c.d.value += n;
}
function netejar() {
    console.log("ok");
    c.d.value = '';
}