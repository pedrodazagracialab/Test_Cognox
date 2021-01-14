export const useRegexValidations = () => {
  const validateEmail = (val) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      val.trim()
    )
  }

  const validateString = (val) => {
    return /^[a-zA-Z\x20]{3,25}$/.test(val.trim())
  }

  const validatePassword = (val) => {
    return /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]\S{5,16}$/.test(val.trim())
  }

  const validateNumbers = (val) => {
    return /^[0-9]{0,}$/.test(val.trim())
  }

  const validateAlphaNumeric = (val) => {
    return /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test(val.trim())
  }

  return {
    validateEmail,
    validateString,
    validatePassword,
    validateNumbers,
    validateAlphaNumeric
  }
}
