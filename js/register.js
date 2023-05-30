function passwordVerification() {
   let password = document.getElementById('password').value;
   let cPassword = document.getElementById('c-password').value;

   let verif1 = document.getElementById('verif-1');
   let verif2 = document.getElementById('verif-2');
   let verif3 = document.getElementById('verif-3');
   let verif4 = document.getElementById('verif-4');

   let a = false; // 1 2 and 3 rules
   let b = false; // 4th rule : Confirm Password

   // Checks if password is empty
   if (password == '') {
      verif1.style = 'color: #ff4621;'
      verif1.style.animation = 'shake 0.5s linear'

      verif2.style = 'color: #ff4621;'
      verif2.style.animation = 'shake 0.5s linear'

      verif3.style = 'color: #ff4621;'
      verif3.style.animation = 'shake 0.5s linear'
      
      a = false
   }

   // Checks if password and confirm password is the same
   if (password == cPassword) {
      verif4.style = 'color: #69ff29;';

      b = true;
   } else {
      verif4.style = 'color: #ff4621;';
      verif4.style.animation = 'shake 0.5s linear'

      b = false
   }

   // Checks if password contains 1 not 2 or 3
   if (password.length < 8) {
      verif1.style = 'color: #69ff29;';

      verif2.style = 'color: #ff4621;';
      verif2.style.animation = 'shake 0.5s linear'

      verif3.style = 'color: #ff4621;';
      verif3.style.animation = 'shake 0.5s linear'
      
      a = false;
   }

   // Checks if password contains 1 and 2 but not 3
   if (password.length > 8) {
      verif1.style = 'color: #69ff29;';

      verif2.style = 'color: #69ff29;';

      verif3.style = 'color: #ff4621;';
      verif3.style.animation = 'shake 0.5s linear'
      
      a = false;
   }

   // Checks if password contains 1 2 and 3
   if (password.length > 8 && password.length < 16) {
      verif1.style = 'color: #69ff29;';

      verif2.style = 'color: #69ff29;';

      verif3.style = 'color: #69ff29;';
      
      a = true;
   }

   if (a && b) {
      return true;
   } else {
      return false
   }
}

