function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Slider
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.hero__btn--right');
const prevBtn = document.querySelector('.hero__btn--left');

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

nextBtn.addEventListener('click', function () {
  counter++;
  carousel();
});

prevBtn.addEventListener('click', function () {
  counter--;
  carousel();
});

function carousel() {
if(counter === slides.length){
  counter = 0;
}
if(counter < 0 ){
  counter = slides.length - 1;
}

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%`;
  });
}
