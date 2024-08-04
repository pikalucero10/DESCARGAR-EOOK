
document.getElementById('downloadBtn').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Cambia el texto del botón
  this.textContent = 'Descargando...';
  
  // Simula un proceso de descarga
  setTimeout(() => {
    this.textContent = '¡Descarga Completada!';
    this.style.backgroundColor = '#45a049';
    
    // Redirige después de un breve retraso
    setTimeout(() => {
      window.location.href = 'https://cuty.io/arz0k';
    }, 1000);
  }, 2000);
});
