//Fare una lista da 1 a 100 e stamparla in html

const element = document.getElementById("list");
const box = document.getElementById("box");

for (let i = 1; i <= 100; i++){

//Prendere i multipli sia di 5 che di 3 e al suo posto mettere FIZZBUZZ
    if (i % 3 === 0 && i % 5 === 0){
        list.innerHTML += `<li class="box fizzbuzz">FizzBuzz</li>`

//Prendere tutti i multipli di 3 e al suo posto mettere FIZZ
    }else if (i % 3 === 0){
        list.innerHTML += `<li class="box fizz">Fizz</li>`

//Prendere tutti i multipli di 5 e al suo posto mettere BUZZ
    }else if (i % 5 === 0){
        list.innerHTML += `<li class="box buzz">Buzz</li>`

    }else {
        list.innerHTML += `<li class="box">${i}</li>`;

    }
}
