// loginPage.test.js

const { validateEmail, login } = require('./LoginPage');
describe('LoginPage', () => {
  describe('validateEmail', () => {
  it('should return true for a valid email', () => {
    const isValid = validateEmail('test@example.com');
    expect(isValid).toBe(true);
  });
  it('should return false for an invalid email', () => {
      const isValid = validateEmail('invalid-email');
      expect(isValid).toBe(false);
    });
  });

  describe('login', () => {
    //valid credentials
  it('should return true for valid credentials', () => {
      const isLoggedIn = login('test@example.com', 'password');
      expect(isLoggedIn).toBe(true);
    });
    //invalid credentials with correct email, wrong pwd
  it('should return false for invalid credentials', () => {
      const isLoggedIn = login('test@example.com', 'wrong-password');
      expect(isLoggedIn).toBe(false);
    });
     //invalid credentials with wrong email, correct pwd
     it('should return false for invalid credentials', () => {
      const isLoggedIn = login('testexample.com', 'password');
      expect(isLoggedIn).toBe(false);
    }); 
     //invalid credentials with both wrong email and pwd
     it('should return false for invalid credentials', () => {
      const isLoggedIn = login('testexample.com', 'wrong-password');
      expect(isLoggedIn).toBe(false);
    });
  });
});
