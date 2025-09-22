//ejercicio 1 - 1
function pares() {
    for (let i=1; i<=100; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}
pares();

//ejercicio 2 - 1
function pares(inicio,fin) {
    for (let i=inicio; i<=fin; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}
pares(500,550);



//ejercicio 1-2
function cuadrado(){
   for(let i = 1; i<=5; i++){
    let text = "";
    for(let j = 1; j<=5; j++){
        text += "##";
   }
    console.log(text);
   }
}
cuadrado();


//ejercicio 1-3
function cuadrado(){
   for(let i = 1; i<=5; i++){
    let text = "";
    for(let j = 1; j<=5; j++){
        if(i===1 || i===5 || j===1 || j===5){
             text += "##";
        }else{
           text += "  ";
        }        
   }
    console.log(text);
   }
}
cuadrado();


//function drawEquilateralTrianguloDoubleLoop(n, char )
