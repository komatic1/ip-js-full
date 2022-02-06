const spanTest = document.querySelector('#test'),
    divP = document.querySelector('div:first-child');

divP.addEventListener('click', () => {
    spanTest.innerText = 'clicked';
    spanTest.style.color = 'red';
});
