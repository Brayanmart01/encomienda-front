export const rules = {
  firstname: {
    required: { value: true, message: '* Requerido' }
  },

  lastname: {
    required: { value: true, message: '* Requerido' }
  },


  cdi: {
    required: { value: true, message: '* Requerido' }
  },


  email: {
    required: { value: true, message: '* Requerido' },
    pattern: {
      value:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      message: '* Ingrese un correo valido'
    }
  },


  phone: {
    required: { value: true, message: '* Requerido' }
  },


  dateBirth: {
    required: { value: true, message: '* Requerido' }
  },


  password: {
    required: { value: true, message: '* Requerido' }
  },

  confirmPassword: {
    required: { value: true, message: '* Requerido' }
  },


  gender: {
    required: { value: true, message: '* Requerido' }
  },

  country: {
    required: { value: true, message: '* Requerido' }
  },

  state: {
    required: { value: true, message: '* Requerido' }
  },

  municipality: {
    required: { value: true, message: '* Requerido' }
  },
}
