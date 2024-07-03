const dialogs = document.querySelectorAll('dialog');
const showButtons = document.querySelectorAll('.PortfolioButton');
const closeButtons = document.querySelectorAll('.CloseDialogButton');
const nextImageButtons = document.querySelectorAll('.NextImageButton');
const prevImageButtons = document.querySelectorAll('.PrevImageButton');
var slideIndex = 1;

function resetSlideIndex() {
  slideIndex = 1;
}
function showSlides(slides) {
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
function prevSlide(slides) {
  --slideIndex;
  showSlides(slides);
}
function nextSlide(slides) {
  ++slideIndex;
  showSlides(slides);
}

showButtons.forEach((button) => {
  const dialog = Array.from(dialogs).find(
    (element) => element.id === button.name
  );
  button.addEventListener('click', () => {
    slideIndex = 1;

    showSlides(button.nextElementSibling.querySelectorAll('.Slide'));
    dialog.showModal();
  });
});

closeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.parentElement.close();
  });
});

nextImageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    nextSlide(button.parentElement.querySelectorAll('.Slide'));
  });
});

prevImageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    prevSlide(button.parentElement.querySelectorAll('.Slide'));
  });
});
