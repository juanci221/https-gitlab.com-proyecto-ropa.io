document.addEventListener('DOMContentLoaded', function() {
  function changeImages(elementId, imagesArray) {
    var element = document.getElementById(elementId);
    var currentImageIndex = 0;

    function changeImage() {
      if (element) {
        element.src = imagesArray[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % imagesArray.length;
      }
    }

    setInterval(changeImage, 1000);
  }

  var pared = 'imagen12';
  var images = ['abc.png', 'abc1.png', 'abc2.png', 'abc3.png'];
  changeImages(pared, images);

  var pared1 = 'imagen13';
  var images1 = ['isa0.png', 'isa1.png', 'isa2.png', 'isa3.png'];
  changeImages(pared1, images1);
});



const bars = document.querySelector(".bars")
bars.onclick =function () {
  var  navBars= document.querySelector(".nav-bars");
    navBars.classList.toggle("active")

}