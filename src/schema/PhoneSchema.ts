import z from 'zod';

const PhoneSchema = z
  .string()
  .length(9, 'El número de celular debe tener exactamente 9 dígitos')
  .regex(/^[0-9]+$/, 'El número de celular no es válido');

export { PhoneSchema };
