const form = document.querySelector('form');
const firstNameInput = document.getElementById('name-input');
const lastNameInput = document.getElementById('last-name-input');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');


form.addEventListener('submit', function(event) {

  event.preventDefault();
  

  let everythingIsGood = true;
  

  firstNameInput.classList.remove('error-input');
  lastNameInput.classList.remove('error-input');
  emailInput.classList.remove('error-input');
  passwordInput.classList.remove('error-input');
  

  const allErrorMessages = document.querySelectorAll('.error-message');
  allErrorMessages.forEach(msg => {
    msg.classList.remove('error'); 
  });
  
  
  if (firstNameInput.value.trim() === '') {
    // Show error on input (red border + error icon)
    firstNameInput.classList.add('error-input');
    // Show error message text
    firstNameInput.nextElementSibling.classList.add('error');
    everythingIsGood = false;
  }
  

  if (lastNameInput.value.trim() === '') {
    lastNameInput.classList.add('error-input');
    lastNameInput.nextElementSibling.classList.add('error');
    everythingIsGood = false;
  }
  

  const emailValue = emailInput.value.trim();
  if (emailValue === '' || !emailValue.includes('@') || !emailValue.includes('.')) {
    emailInput.classList.add('error-input');
    emailInput.nextElementSibling.classList.add('error');
    everythingIsGood = false;
  }
  
  
  if (passwordInput.value.trim() === '') {
    passwordInput.classList.add('error-input');
    passwordInput.nextElementSibling.classList.add('error');
    everythingIsGood = false;
  }
  

  if (everythingIsGood) {
    form.submit();
  }
});