import { UserEntity } from '@app/domain/entity/UserEntity';
import { injectable } from 'tsyringe';
import { UserService } from '../infrastructure/UserService';
import { Result } from '../types';
import IUserRepository from './interfaces/IUserRepository';

@injectable()
export class UserRepository implements IUserRepository {
  constructor(private readonly userService: UserService) {}

  public async getById(userId: number): Promise<Result<UserEntity, string>> {
    const result = await this.userService.getById(userId);

    if (!result.ok) {
      return { ok: false, error: 'No se ha podido obtener el usuario' };
    }

    const dto = result.value;
    return { ok: true, value: new UserEntity(dto.rut, dto.name, dto.email) };
  }

  public async update(user: UserEntity): Promise<Result<string, string>> {
    const response = await this.userService.update({
      rut: user.rut,
      name: user.name,
      email: user.email,
    });

    if (!response.ok) {
      return { ok: false, error: 'No se ha podido actualizar el usuario, inténtelo más tarde.' };
    }

    return { ok: true, value: 'Se ha actualizado correctamente el usuario' };
  }
}
