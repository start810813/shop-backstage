const emailMessage = '須符合信箱格式'
const passwordMessage = '密碼最少八個字元，限英文、數字'
const confirmPasswordMessage = '與密碼不一致'

const validEmail = (email) => {
  return email && /^\S+@\S+\.\S+$/.test(email)
}

const validPassword = (password) => {
  return password && /^[A-Za-z0-9].{7,}$/.test(password)
}
const validConfirmPassword = (confirmPassword, password) => {
  return confirmPassword && confirmPassword === password
}

export {
  emailMessage,
  validEmail,
  passwordMessage,
  confirmPasswordMessage,
  validPassword,
  validConfirmPassword
}
