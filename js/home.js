const hiddenForm = document.querySelectorAll('.form-hidden');

function showRegisterForm() {
   hiddenForm.forEach((i) => {
      i.classList.add('form-show');

      document.body.classList.add('modal-open');
   });
}

function hideRegisterForm() {
   hiddenForm.forEach((i) => {
      i.classList.remove('form-show');
      
      document.body.classList.remove('modal-open');
   });
}