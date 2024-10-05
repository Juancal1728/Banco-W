// Función específica para la página de CDT
document.addEventListener('DOMContentLoaded', function() {
    console.log("Bienvenido a la página de CDT");
    
    const button = document.getElementById('learnMore');
    if (button) {
        button.addEventListener('click', function() {
            alert("Descubre más sobre el CDT.");
        });
    }
});


