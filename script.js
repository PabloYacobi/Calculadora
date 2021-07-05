
var numeros = [];
var resultado = 0;
var operacionOk = false
var operacionInicial =true
var lastOperation= "";


function btnNum(numero){
  
  if(operacionOk){
    document.getElementById("numero").value=numero;
    operacionOk=false;
  }
  else{
    var tmp=document.getElementById("numero").value;
  document.getElementById("numero").value=tmp+numero;
  }
  

}
function btnSumar(){
  operacionOk=true;
  operacionInicial=false;
  var valor = parseInt(document.getElementById("numero").value);
    resultado = resultado+valor;
    console.log(resultado);
    document.getElementById("numero").value = resultado;
    lastOperation="add";
  //var valor = document.getElementById("numero").value;
  //numeros.push(valor);
  //console.log(numeros);

}

function btnRestar(){
 var valor = parseInt(document.getElementById("numero").value);
 if(operacionInicial){
   resultado=valor
 }
 else{
   resultado=resultado-valor;
 }
  operacionInicial=false;
  operacionOk=true;
  console.log(resultado);
  document.getElementById("numero").value = resultado;
  lastOperation="substract"
}

function btnMultiplicar(){
  operacionOk=true;
  var valor = parseInt(document.getElementById("numero").value)
  if(operacionInicial){
    resultado = valor;
    operacionInicial=false;
    lastOperation="multiply"
  }
  else{
     resultado = resultado*valor;
  }

  console.log(resultado);
  document.getElementById("numero").value = resultado;
}

function btnDividir(){
  var valor = parseInt(document.getElementById("numero").value);
 if(operacionInicial){
   resultado=valor
 }
 else{
   resultado=resultado/valor;
 }
  operacionInicial=false;
  operacionOk=true;
  console.log(resultado);
  document.getElementById("numero").value = resultado;
  lastOperation="divide";
}

function total(){
   if(lastOperation=="add"){
    btnSumar();
   }
   if(lastOperation=="substract"){
     btnRestar();
   }
   if(lastOperation=="divide"){
     btnDividir();
   }
   if(lastOperation=="multiply"){
     btnMultiplicar();
   }

}

function btnClear(){
  document.getElementById("numero").value="";
  numeros = [];
  resultado = 0;
  operacionOk = false
  operacionInicial =true
  lastOperation= "";
}