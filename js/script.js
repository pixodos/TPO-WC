const oficioImgs = document.querySelectorAll('.oficios');

oficioImgs.forEach((img) => {
  img.addEventListener('mouseover', () => {
    img.classList.add('blur');
  });

  img.addEventListener('mouseout', () => {
    img.classList.remove('blur');
  });
});