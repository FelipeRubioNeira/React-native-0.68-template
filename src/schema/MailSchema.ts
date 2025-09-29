import z from 'zod';

export const MailSchema = z
  .string()
  .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'El email no es válido');
