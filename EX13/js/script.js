window.onload = function(){
    for (var p of document.getElementsByTagName("p")) {
        p.addEventListener("click", function(){
            alert("se presionó un párrafo del documento");
        });
    }

    for (var p of document.getElementsByTagName("table")[1].getElementsByTagName("p")) {
        p.addEventListener("click", function(){
            alert("se presionó un párrafo contenido en la segunda tabla");
        });
    }
};