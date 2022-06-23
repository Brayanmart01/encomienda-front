export const rules = {
  email: {
    required: { value: true, message: '* Requerido' },
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: '* Ingrese un correo válido'
    }
  },
  password: {
    required: { value: true, message: '* Contraseña Requerida' }
  }
}
