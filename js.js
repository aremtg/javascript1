function calcular(){
var nota = parseInt(prompt("cual fue tu nota"));
var reaccion = document.querySelector("#div-reaccion");

if(nota >= 5){
    alert("tu nota de : " + nota + " dice que !Pasaste!");
    reaccion.innerHTML= `<img src="/feliz.svg" alt="">`;
}else if(nota < 5 && nota > 0){
    alert("tu nota de : " + nota + " dice que !Perdiste!");
    reaccion.innerHTML= `<img src="/triste2.svg" alt="">`;
}else if(nota <= 0 || nota > 10){
    alert("tu nota no pudo ser " + nota + ", consulta con tu profesor" + " eu nota tiene que estar en un rango de 1 a 10")
}
// else if( nota != Number){
//     alert( nota + " no es una nota valida")
// }
else if( isNaN(nota) ){
    alert( nota + " no es una nota válida.");
  }
};