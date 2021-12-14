var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");

/*Esta es la estructura basica para identificar el Canvas */

var l = 0;
var lineas = 30;

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
    yi = 10 * l;
    xf = 10 * (l + 1);

    drawLine(color, 0, yi, xf, 300 )


    }
    

/* Dibujo lado izquierdo */ 

    for (l = 0; l < lineas; l++)
    {
    
        xi = 10 * l;
        yf = 10 * (l + 1);
    
        drawLine(color, xi, 0, 300, yf);
    
    } 

/* Dibujo lado derecho */



for (l = 0; l < lineas; l++)
{
    yi = 300 - (l * 10);
    xf = (l + 1) * 10;

    drawLine(color, 0, yi, xf, 0);

}

/* Dibujo inferior izquierdo */

drawLine(color, 300, 0, 290, 300)
drawLine(color, 300, 10, 280, 300)

for(l = 0; l < lineas; l++)
{
    yi = l * 10;
    xf = 300 - (l * 10);

    drawLine(color, 300, yi, xf, 300);
}
