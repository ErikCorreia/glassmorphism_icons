const colors = document.querySelector('#section');

const facebook = document.querySelector('#facebook');
const instagram = document.querySelector('#instagram');
const whatsapp = document.querySelector('#whatsapp');
const github = document.querySelector('#github');

colors.addEventListener('mouseout', () => {
  colors.style.background = 'linear-gradient(to bottom, #0cc1c7, #00b862)';
});

/*Altera a cor de fundo do elemento "section" quando o evento de "mouseover" for disparado
para cada icone */
facebook.addEventListener('mouseover', () => {
  colors.style.background = '#0055c4';
});
whatsapp.addEventListener('mouseover', () => {
  colors.style.background = '#159e43';
});
instagram.addEventListener('mouseover', () => {
  colors.style.background = 'linear-gradient(rgb(143, 6, 47), rgb(165, 65, 40))';
});
github.addEventListener('mouseover', () => {
  colors.style.background = '#22272e';
});
