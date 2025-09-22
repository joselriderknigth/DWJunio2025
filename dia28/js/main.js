const buttons = document.querySelectorAll('.e2_1');
buttons.forEach(button => {
    button.addEventListener('click',changeColor);
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
