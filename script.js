document.addEventListener('DOMContentLoaded', function() {
    const colorBoxes = document.querySelectorAll('.color-box');
    const body = document.body;

    colorBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const selectedColor = this.getAttribute('data-color');
            body.style.backgroundColor = selectedColor;
        });
    });
});