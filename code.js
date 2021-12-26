var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");

var text = document.getElementById("input-text");
var button = document.getElementById("input-button");
var ancho = d.width; 
button.addEventListener("click", dibujoPorClick);



function dibujoPorClick()
{
    var valor = parseInt(text.value);
    
    /*Esta es la estructura basica para identificar el Canvas */

var l = 0;
var lineas = text.value;
var distancia = ancho / text.value;
var xi, yi, xf, yf;

var color = "red"

/* Estos son los metodos y atributos de Canvas dentro de una funcion*/

function drawLine(color, Xi, Yi, Xf, Yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(Xi,Yi);
    lienzo.lineTo(Xf,Yf);
    lienzo.stroke();
    lienzo.closePath(); 
}

for(l = 0; l < lineas; l++)
{
    yi = distancia * l;
    xf = distancia * (l + 1);

    drawLine(color, 0, yi, xf, 300 )


    }
    

/* Dibujo lado izquierdo */ 

    for (l = 0; l < lineas; l++)
    {
    
        xi = distancia * l;
        yf = distancia * (l + 1);
    
        drawLine(color, xi, 0, 300, yf);
    
    } 

/* Dibujo lado derecho */



for (l = 0; l < lineas; l++)
{
    yi = 300 - (l * distancia);
    xf = (l + 1) * distancia;

    drawLine(color, 0, yi, xf, 0);

}

/* Dibujo inferior izquierdo */

drawLine(color, 300, 0, 290, 300)
drawLine(color, 300, 10, 280, 300)

for(l = 0; l < lineas; l++)
{
    yi = l * distancia;
    xf = 300 - (l * distancia);

    drawLine(color, 300, yi, xf, 300);
}
   
    
}