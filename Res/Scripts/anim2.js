var divElements = document.querySelectorAll('.grid-container .box');

divElements.forEach(function(element) {
  element.addEventListener('click', function() {
    // Your event handling code goes here cont
    
    //Remove "cont" from the string
    var x = element.id;
    var y =  x.lastIndexOf("t");
    var z = x.slice(y + 1);
    console.log(x);
    displayCurrentImg("img" + z);
    console.log("img" + z);
  });
});

function 
displayCurrentImg(imgN){
  var a = document.getElementById("imageHolder");
  var xyz = document.getElementById(imgN).getAttribute("src");
  
  a.setAttribute("src", xyz);
  console.log(xyz);
  if(xyz == "img9"){
    a.style.height = "600px";
  }
}