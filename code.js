var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");

/*Esta es la estructura basica para identificar el Canvas */

lienzo.beginPath();
lienzo.strokeStyle = "blue";
lienzo.moveTo(50,10);
lienzo.lineTo(200,200);
lienzo.stroke();
lienzo.closePath(); 

/* Estos son los metodos y atributos de Canvas */
