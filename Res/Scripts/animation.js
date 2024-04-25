// Function to pulsate the backlight  

  function pulsate() {
    var image = document.getElementById('imageHolder');
   // var currentShadow = image.style.boxShadow;
  //  var newShadow = currentShadow ? '' : ' 0 0 20px rgba(255, 255, 255, 0.7)';
   // image.style.boxShadow = newShadow;
  }
  

  // Call pulsate function every second (adjust interval as needed)
  setInterval(pulsate, 1000);