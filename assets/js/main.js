const array = ['salam', 'necesen', 'netersen', 'nevar neyox', 'evde', 'esikde'];

const musbetbutton = document.getElementById('musbet');
const menfibutton = document.getElementById('menfi');
const arrayim = document.getElementById('array');

function ekran() {
  arrayim.textContent = array.join(' kele ');
}

musbetbutton.addEventListener('click', () => {
  const sonSoz = array.pop();
  array.unshift(sonSoz);
  ekran();
});

menfibutton.addEventListener('click', () => {
  const ilkSoz = array.shift();
  array.push(ilkSoz);
  ekran();
});
ekran ();