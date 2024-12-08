

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';


function saveFormData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}


function loadFormData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  return savedData ? JSON.parse(savedData) : { email: '', message: '' };
}

const formData = loadFormData();
form.email.value = formData.email || '';
form.message.value = formData.message || '';


const handleInput = _.throttle(() => {
  const dataToSave = {
    email: form.email.value,
    message: form.message.value,
  };
  saveFormData(dataToSave);
}, 500);


form.addEventListener('input', handleInput);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const submittedData = {
    email: form.email.value,
    message: form.message.value,
  };

  console.log('Submitted data:', submittedData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});