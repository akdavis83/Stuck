document.querySelector('.toggle').addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.toggle('toggle--active');
});