import { useRegexValidations } from './useRegexValidations'

export const useValidateFields = async (fields, data) => {
  const { validateEmail, validateNumbers } = useRegexValidations()
  const errors = {}
  for (const field of fields) {
    if (field.required || data[field.name]) {
      switch (field.type) {
        case 'String':
          if (!data[field.name]?.trim()) {
            errors[field.name] = 'Este campo es requerido'
          }
          break
        case 'Number':
          if (!data[field.name].toString()?.trim()) {
            errors[field.name] = 'Este campo es requerido'
          } else {
            if (!validateNumbers(data[field.name])) {
              errors[field.name] = 'Formato inválido'
            }
          }
          break
        case 'Select':
          if (!data[field.name]?.trim()) {
            errors[field.name] = 'Este campo es requerido'
          }
          break
        case 'Email':
          if (!data[field.name]?.trim()) {
            errors[field.name] = 'Este campo es requerido'
          } else {
            if (!validateEmail(data[field.name])) {
              errors[field.name] = 'Formato inválido'
            }
          }
          break
      }
    }
  }
  return errors
}
