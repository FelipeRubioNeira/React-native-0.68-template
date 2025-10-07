import { injectable } from 'tsyringe';
import { ServiceDTO, UserDTO } from './dto/UserDTO';
import { Result } from '../types';

@injectable()
class UserService {
  public async getById(userId: number): Promise<Result<UserDTO, string>> {
    const defaultErrorRequest: Result<UserDTO, string> = {
      ok: false,
      error: 'No se pudo obtener el usuario',
    };

    try {
      const result: ServiceDTO<UserDTO> = await Promise.resolve({
        status: 200,
        message: 'User fetched successfully',
        payload: {
          id: userId,
          name: 'John Doe',
          email: 'john.doe@example.com',
          rut: '12345678-9',
          address: '123 Main St',
          birthdate: '1990-01-01',
        },
      });

      if (result.status !== 200 || !result.payload) {
        return {
          ok: false,
          error: result.message || 'Error al obtener el usuario',
        };
      }

      return { ok: true, value: result.payload };
    } catch (error) {
      return defaultErrorRequest;
    }
  }

  public async update(_user: UserDTO): Promise<Result<string, string>> {
    const defaultErrorRequest: Result<string, string> = {
      ok: false,
      error: 'No se pudo actualizar el usuario',
    };

    try {
      const result: ServiceDTO<UserDTO> = await Promise.resolve({
        status: 200,
        message: 'User updated successfully',
      });

      if (result.status !== 200) {
        return {
          ok: false,
          error: result.message || 'Error al actualizar el usuario el usuario',
        };
      }

      return { ok: true, value: 'Usuario actualizado exitosamente' };
    } catch (error) {
      return defaultErrorRequest;
    }
  }
}

export { UserService };
