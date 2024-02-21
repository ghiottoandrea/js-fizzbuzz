//Fare una lista da 1 a 100 e stamparla in html

const element = document.getElementById("list");

for (let i = 1; i <= 100; i++){

//Prendere i multipli sia di 5 che di 3 e al suo posto mettere FIZZBUZZ
    if (i % 3 === 0 && i % 5 === 0){
        list.innerHTML += `<li>FizzBuzz</li>`

//Prendere tutti i multipli di 3 e al suo posto mettere FIZZ
    }else if (i % 3 === 0){
        list.innerHTML += `<li>Fizz</li>`

//Prendere tutti i multipli di 5 e al suo posto mettere BUZZ
    }else if (i % 5 === 0){
        list.innerHTML += `<li>Buzz</li>`

    }else {
        list.innerHTML += `<li>${i}</li>`;

    }
}

