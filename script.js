
var numeros = [];
var resultado = 0;
var operacionOk = false
var operacionInicial =true

 function test(){
   document.getElementById("titulo1").innerHTML = "OK";
   console.log("Has pulsado el botón");
 }
  

function btnSumar(){
  operacionOk=true;
  operacionInicial=false;
  var valor = parseInt(document.getElementById("numero").value);
    resultado = resultado+valor;
    console.log(resultado);
    document.getElementById("numero").value = resultado;
  //var valor = document.getElementById("numero").value;
  //numeros.push(valor);
  //console.log(numeros);
}

function btnRestar(){
  operacionInicial=false
  operacionOk=true;
  var valor = parseInt(document.getElementById("numero").value);
  resultado = resultado-valor;
  console.log(resultado);
  document.getElementById("numero").value = resultado;
}

function btnMultiplicar(){
  operacionOk=true;
  var valor = parseInt(document.getElementById("numero").value)
  if(operacionInicial){
    resultado = valor;
    operacionInicial=false;
  }
  else{
     resultado = resultado*valor;
  }

  console.log(resultado);
  document.getElementById("numero").value = resultado;
}

function btnDividir(){
  operacionOk=true;
 if(operacionInicial){
   resultado=valor;
   operacionInicial=false;
 }
 else{
   resultado/valor;
 }
  var valor = parseInt(document.getElementById("numero").value)
  resultado = resultado/valor;
  console.log(resultado);
  document.getElementById("numero").value = resultado;
}

function total(){
  var resultado = 0;
  for(i=0;i<=numeros.length-1;i++){
    resultado = resultado + parseFloat(numeros[i]);
    console.log(resultado)
        document.getElementById("numero").value = resultado;
      }
    }


