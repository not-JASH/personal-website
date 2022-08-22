
// 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if(n > slides.length) {
    slideIndex = 1
  }
  if(n < 1) {
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// HTML DOM for Sliders

function addImg(image,name) {
    const slider = document.querySelector(name);
    slider.appendChild(image);
}

function genSlide(link) {
    const slide = document.createElement("div");
    slide.className = "mySlides fade";
    // add numbers for image
    slide.appendChild(genImg(link));
    // add name for image
    return slide;
}

function genImg(link) {
    const image = document.createElement("img");
    image.src = link;
    return image;
}

function popSlides(images) {
  for (i=0;i<images.Togetherness.image.length(); ++i) {
    addImg(images.Togetherness.image[i],"#togetherness-slideshow");
  }

  for (i=0;i<images.LivingBreathing.image.length();++i){
    addImg(images.LivingBreathing.image[i],"#livingbreathing-slideshow");
  }

  for (i=0;i<images.DarkBeautiful;++i) {
    addImg(images.DarkBeautiful.image[i],"#darkbeautiful-slideshow");
  }
}