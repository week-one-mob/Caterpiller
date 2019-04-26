import feedCaterpillar from '../src/feedCaterpillar.js';
const test = QUnit.test;

test('appends part to caterpillar', (assert) => {
   
    const fruitName = 'apple';
    const mockCaterpillar = document.createElement('div');
    const expected = '<span class="part apple"></span>';

    feedCaterpillar(mockCaterpillar, fruitName);
    
    const parentInnerHTML = mockCaterpillar.innerHTML;
    assert.equal(parentInnerHTML, expected);
});