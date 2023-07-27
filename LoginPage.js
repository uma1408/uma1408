
function validateEmail(email) {
  // Function to validate email format
 return /\S+@\S+\.\S+/.test(email);
}
function login(email, password) {
 // Function to perform login
  if (email === 'test@example.com' && password === 'password') {
    return true;
  } else {
    return false;
  }
}
module.exports = {
  validateEmail,
  login
};


