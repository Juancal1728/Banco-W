document.getElementById('learnMore').addEventListener('click', function() {
    alert('Descubre más sobre nuestros servicios en el sitio web.');
});

// Si deseas agregar más funcionalidades, aquí tienes algunos ejemplos:

// Función para redirigir a las páginas individuales al hacer clic en los servicios
const serviceCards = document.querySelectorAll('.service-card a');
serviceCards.forEach(card => {
    card.addEventListener('click', function(event) {
        // Puedes agregar aquí cualquier lógica adicional antes de redirigir
        console.log('Redirigiendo a:', this.getAttribute('href'));
    });
});







let slideIndex = 0; // Índice inicial
showSlides(); // Iniciar el slideshow

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Ocultar todas las diapositivas
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Volver al inicio
    }
    slides[slideIndex - 1].style.display = "block"; // Mostrar la diapositiva actual
    setTimeout(showSlides, 3000); // Cambiar cada 3 segundos
}

document.getElementById("learnMore").onclick = function() {
    var additionalInfo = document.createElement("div");
    additionalInfo.innerHTML = `
        <h2>¿Por qué elegir CDT?</h2>
        <p>Los CDT son ideales para quienes buscan un crecimiento seguro y constante de su inversión. Con una tasa de interés atractiva y la posibilidad de elegir el plazo que más te convenga, tu dinero estará seguro.</p>
        <h3>Cómo funciona:</h3>
        <ul>
            <li>Depositas una cantidad de dinero por un tiempo determinado.</li>
            <li>Al final del plazo, recibes tu capital más los intereses generados.</li>
            <li>Puedes elegir entre diferentes plazos y montos.</li>
        </ul>
    `;
    document.querySelector(".services").appendChild(additionalInfo);
};

document.getElementById('cortoPlazoBtn').addEventListener('click', function() {
    document.getElementById('infoCortoPlazo').style.display = 'block';
    document.getElementById('infoLargoPlazo').style.display = 'none';
});

document.getElementById('largoPlazoBtn').addEventListener('click', function() {
    document.getElementById('infoLargoPlazo').style.display = 'block';
    document.getElementById('infoCortoPlazo').style.display = 'none';
});
