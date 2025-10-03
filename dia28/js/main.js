
function randomColor(){
  const r=  Math.floor(Math.random()*256);
  const g=  Math.floor(Math.random()*256);
  const b=  Math.floor(Math.random()*256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeBurronColor(event){
  event.target.style.backgroundColor = randomColor();  
}

const buttons = document.querySelectorAll('.e1-1');
buttons.forEach(button => {
    button.addEventListener('click',changeBurronColor);
});


//ejercicio 2.2
const button2_2 = document.getElementById('button2_2');

const div2_2 = document.querySelectorAll('.e2_2');
button2_2.addEventListener('click', () => {
  div2_2.forEach( div => {
       div.computedStyleMap.backgroundColor = randomColor();
  });
});


//ejercicio 2.3
