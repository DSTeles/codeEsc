// Js Sidebar 

const button = document.querySelector('#sidebar-toggle');
const wrapper = document.querySelector('.wrapper');

button.addEventListener('click', function(e) {
  e.preventDefault();
  wrapper.classList.toggle('toggled');
});