function feedCaterpillar(caterpillarElement, fruitName) {
    const span = document.createElement ('span');
    span.classList.add('part');
    span.classList.add(fruitName);

    caterpillarElement.appendChild(span);
}
export default feedCaterpillar;