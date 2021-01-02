const portraitTop = document.getElementById('portraitTop');

portraitTop.addEventListener('mouseover', () => {
    portraitTop.classList.remove('defocusEffect');
});

portraitTop.addEventListener('mouseout', () => {
    portraitTop.classList.add('defocusEffect');
});