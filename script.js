const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', event => {
    console.log(event.target);
  });
});
