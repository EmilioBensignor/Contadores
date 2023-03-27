const counters = document.querySelectorAll('.counter');
const total = document.querySelector('.total .count');

let values = [0, 0, 0];

// Actualiza los contadores y el total
function updateCounters() {
    let sum = 0;
    counters.forEach((counter, index) => {
        counter.querySelector('.count').innerHTML = values[index];
        sum += values[index];
    });
    total.innerHTML = sum;
}

// Maneja el clic en los botones de los contadores
function handleButtonClick(event) {
    const button = event.target;
    const index = Array.from(button.parentElement.parentElement.children).indexOf(button.parentElement);
    const value = button.classList.contains('incrementButton') ? 1 : -1;
    values[index] += value;
    updateCounters();
}

// Agrega un controlador de clic a cada botón
const buttons = document.querySelectorAll('.incrementButton, .decreaseButton');
buttons.forEach(button => button.addEventListener('click', handleButtonClick));

// Actualiza el valor inicial del contador
updateCounters();