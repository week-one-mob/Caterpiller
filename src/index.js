//import need functions
import feedCaterpillar from './feedCaterpillar.js';

//get DOM elements
const fruitButtons = document.querySelectorAll('.fruit');
const caterpillar = document.getElementById('caterpillar');

//initialize things
for(let i = 0; i < fruitButtons.length; i++){
    const fruitButton = fruitButtons[i];

    fruitButton.addEventListener('click', () => {
        feedCaterpillar(caterpillar, fruitButton.value);
    });
}

//dancing

//remove previous class from all
