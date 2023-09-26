let menuToggle = document.querySelector('.menuToggle');
let navigation = document.querySelector('.navigation');
let photo = document.querySelector('.photo img')
var box = document.querySelector('.box');
var boxPhoto = document.querySelector('.box-photo')
var close = document.getElementById('close');



menuToggle.onclick = function () {
  navigation.classList.toggle('active')
}


photo.addEventListener('click', function (e) {
  openSlider(e)
})

function openSlider(e) {
  var currentImg = e.target.getAttribute('src');
  console.log(currentImg);
  box.style.display = 'flex';
  boxPhoto.style.backgroundImage = `url(${currentImg})`;
}

close.addEventListener('click', closeItem)

function closeItem() {
    box.style.display = 'none';
}