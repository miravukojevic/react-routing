export const updateLocalStorage = (key, list) => {
    localStorage.setItem(key, JSON.stringify(list))
}

export const email = (isValidEmail, email) => {
    if (!isValidEmail) {
      return (
          `${email} is not a valid email.`

      )
    }
    return `${email} is a valid email.`
};

export const username = (isValidUsername) => {
    if (!isValidUsername) {
      return (
          `Username must contain at least 8 characters.`

      )
    }
    return ``
};
export const password = (isValidPassword) => {
    if (!isValidPassword) {
      return (
          `Password must contain at least 5 characters.`

      )
    }
    return ``
};
export const repeatpassword = (isValidRepeatPassword) => {
    if (!isValidRepeatPassword) {
      return (
          `Password must match.`

      )
    }
    return ``
};
export const oldpassword = (isValidOldPassword) => {
    
    if (!isValidOldPassword) {
      return (
          `Password must match with old password.`

      )
    }
    return ``
};