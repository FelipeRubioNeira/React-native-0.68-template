import { injectable } from 'tsyringe';
import { UserRepository } from '@app/data/repository/UserRepository';
import { IGetUserUseCase } from './interfaces';
import { UserEntity } from '../entity/UserEntity';
import { Result } from '@app/data/types';

@injectable()
export class GetUserUseCase implements IGetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(userId: number): Promise<Result<UserEntity, string>> {
    const result = await this.userRepository.getById(userId);

    if (!result.ok) {
      // se puede ejecutar cierta logica asociada al caso de uso
    }

    return result;
  }
}
