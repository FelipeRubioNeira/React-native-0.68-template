import z from 'zod';

const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
const EMAIL_ERROR_MESSAGE = 'El email no es válido';

export const MailSchema = z.string().regex(EMAIL_REGEX, EMAIL_ERROR_MESSAGE);
