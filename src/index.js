//import need functions

//get DOM elements
const fruitButtons = document.querySelectorAll('.fruit');
const caterpillar = document.getElementById('caterpillar');
//initialize things
for(let i = 0; i < fruitButtons.length; i++){
    const fruitButtons = fruitButtons[i];

    fruitButtons.addEventListener('click', () => {
        feedCaterpillar()
    });
}
//dancing

//remove previous class from all
