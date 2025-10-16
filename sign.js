document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.needs-validation');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');

  form.addEventListener('submit', function (event) {
    // Check password match
    if (password.value !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Passwords do not match');
    } else {
      confirmPassword.setCustomValidity('');
    }

    // Check overall validity
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault(); // prevent actual submission for demo
      alert('✅ Sign Up Successful!');
      form.reset();
      form.classList.remove('was-validated');
    }

    form.classList.add('was-validated');
  });

  // Real-time password confirmation check
  confirmPassword.addEventListener('input', function () {
    if (password.value === confirmPassword.value) {
      confirmPassword.setCustomValidity('');
    } else {
      confirmPassword.setCustomValidity('Passwords do not match');
    }
  });
});
