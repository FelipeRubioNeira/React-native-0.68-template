import IUserRepository from '@app/data/repository/interfaces/IUserRepository';
import { Result } from '@app/data/types';
import { UserEntity } from '../entity/UserEntity';

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(
    userId: number,
    name: string,
    email: string,
    birthdate: Date,
  ): Promise<Result<UserEntity, string>> {
    // 1. Obtener el usuario actual
    const result = await this.userRepository.getById(userId);

    // 2. Validar si se obtuvo el usuario
    if (!result.ok) {
      return { ok: false, error: result.error };
    }

    // 3. Actualizar la información del usuario localmente
    const user = result.value;
    const updatedResult = user.updateInformation(name, email, birthdate);

    // 4. Validar si la actualización fue exitosa
    if (!updatedResult.ok) {
      return { ok: false, error: updatedResult.error };
    }

    // 5. Guardar los cambios en el repositorio
    const updatedUser = updatedResult.value;
    const saveResult = await this.userRepository.update(updatedUser);

    // 6. Validar si el guardado fue exitoso
    if (!saveResult.ok) {
      return { ok: false, error: saveResult.error };
    }

    // 7. Retornar el usuario actualizado
    return { ok: true, value: updatedUser };
  }
}
