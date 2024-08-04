document.getElementById('downloadBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    this.textContent = 'Descargando...';
    
    setTimeout(() => {
      this.textContent = '¡Descarga Completada!';
      this.style.backgroundColor = '#45a049';
      
      setTimeout(() => {
        window.location.href = 'https://cuty.io/arz0k';
      }, 1000);
    }, 2000);
  });