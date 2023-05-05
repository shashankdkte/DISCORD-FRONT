export const validateLoginForm = ({ email, password }) => {
  const isEmailValid = validateMail(email);
  const isPasswordValid = validatePassword(password);
  return isEmailValid && isPasswordValid;
};

export const validateRegisterForm = ({ email, password, username }) => {
  return (
    validateMail(email) &&
    validatePassword(password) &&
    validateUsername(username)
  );
};
export const validateMail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};

const validatePassword = (password) =>
  password.length > 5 && password.length < 13;

const validateUsername = (username) => {
  return username.length > 2 && username.length < 13;
};
