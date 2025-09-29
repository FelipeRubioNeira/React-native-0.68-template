import z from 'zod';
import { MailSchema } from './MailSchema';
import { PhoneSchema } from './PhoneSchema';

export const newUserSchema = z.object({
  userName: z.string().min(3).max(30),
  password: z.string().length(4),
  cellphone: PhoneSchema,
  email: MailSchema,
});
