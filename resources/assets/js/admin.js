
const test = () => {
  console.log('test');
  return true;
};

const adminSubmit = document.getElementById('submit');

if (adminSubmit) {
  adminSubmit.addEventListener('click', test);
}
