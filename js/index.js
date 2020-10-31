var sliderImages = [];
var time = 3000;
cur = 0;

// creating slideImages
sliderImages[0] = "../images/image1.jpg";
sliderImages[1] = "../images/image2.jpg";
sliderImages[2] = "../images/image3.jpg";
sliderImages[3] = "../images/image4.jpg";
sliderImages[4] = "../images/image5.jpg";
//sliderImages[5] = "../images/image6.jpg";


function switchImg() {
  document.slider.src = sliderImages[cur];
  if (cur < sliderImages.length -1){
    cur ++;
  } else {
    cur = 0;
  }
  setTimeout("switchImg()", time);
}

window.onload = switchImg;



var nav = document.getElementById('nav');
var menu = document.getElementById('hmenu');


// Event listeners
menu.addEventListener('click', function(e){
  e.preventDefault();
  nav.classList.toggle('hide-small');
});
