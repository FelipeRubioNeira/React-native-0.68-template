import { ZodType } from 'zod';

// Tipo genérico para cualquier esquema Zod
type GenericSchema<T> = ZodType<T, any, any>;

/**
 *
 * @param schema: GenericSchema<any>
 * @param data: object
 * @returns: boolean
 *
 *  ejemplo de uso:
 *  const userData = { cellphone: "123456789" };
    console.log(isValidSchema(UserSchema, userData)); // true o false
 * 
 */
const isValidSchema = (schema: GenericSchema<any>, data: object): boolean => {
  return schema.safeParse(data).success;
};

export { isValidSchema };
