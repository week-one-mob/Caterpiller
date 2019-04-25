//import need functions

//get DOM elements
const fruitButtons = document.querySelectorAll('.fruit');
const caterpiller = document.getElementById('caterpiller');
//initialize things
for(let i = 0; i < fruitButtons.length; i++){
    const fruitButton = fruitButtons[i];

    fruitButtons.addEventListener('click', () => {
        feedCaterpillar()
    });
}
//dancing

//remove previous class from all
