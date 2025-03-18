function exercicio1()
{
    let numero, quadrado, cubo;

    numero= Number( document.getElementById("numero").value)

    quadrado = numero * numero;
    cubo = numero * numero * numero;

    document.getElementById("mensagem").innerHTML = "<p style='color : blueviolet'>" + 
            "Número é " + numero + "<br>" +
            "Quadrado é " + quadrado + "<br>" +
            "Cubo é " + cubo + "<br>"
            "</p>";
   
}

function exercicio2()
{
    let temperatura;

    temperatura= Number( document.getElementById("temperatura").value );
    
    TemperaturaCelsius= ((temperatura-32) *5)/9;

    document.getElementById("mensagem").innerHTML = "<p style='color : blueviolet'>" + 
            "A temperatura em graus Fahrenheit foi " + temperatura + "<br>" +
            "A temperatura em graus Fahrenheit foi " + TemperaturaCelsius + "<br>" +
            "</p>";

}

function exercicio3()
{

}

function exercicio4()
{

}

function exercicio5()
{

}
