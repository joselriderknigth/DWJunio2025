console.log ("\nEjercicio 1-1");
let array = [1,2,3,4,5,6,7,8,9,10];
console.log(array);

console.log ("\nEjercicio 1-2");
console.log(array[3]);
console.log(array[6]);

console.log ("\nEjercicio 1-3");
console.log(array.length);

console.log ("\nEjercicio 1-4");
array.unshift(0);
console.log(array);

console.log ("\nEjercicio 1-5");
array.push(11);
console.log(array);

console.log ("\nEjercicio 1-6");
array.splice(5,2);
console.log(array);

console.log ("\nEjercicio 2-1");
let pos= array.indexOf(7);
console.log(pos);

console.log ("\nEjercicio 2-2");
array.reverse();
console.log(array);

console.log ("\nEjercicio 2-3");
let text = array.join(",");
console.log(text);

console.log ("\nEjercicio 2-4");
let array2 = text.split(",");
console.log(array2);

console.log ("\nEjercicio 2-5");
array.forEach((num,i) => {
console.log(`el numero ${num} este en la posiscion
     ${i}`);
});


console.log ("\nEjercicio 2-6");
array.forEach((num,i) => {
console.log(num + " es un numero");
});

console.log ("\nEjercicio 3-1");
let find = array2.find((num)=> num.includes("7"));
console.log(find);

console.log ("\nEjercicio 3-2");
let filter = array.filter((num)=> num >5);
console.log(filter);

console.log ("\nEjercicio 3-3");
let sum = array.reduce((acc, num)=> 
    acc+num, 0);
console.log(sum);

console.log ("\nEjercicio 3-4");
let array3 = [5,6,7];
let [a,b,c] = array3;
console.log(a,b,c);

console.log ("\nEjercicio 3-5");
let array4 = ["perro","gato","ratoon","caballo","vaca","oveja","cerdo"];
let lista = document.getElementById("lista");
let lis = array4.map(animal => {
    let li = document.createElement("li");
    li.textContent = animal;
    return li;
});
lis.forEach(li => lista.appendChild(li));

