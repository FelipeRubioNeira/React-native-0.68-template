import { Result } from '@app/data/types';
import { UserEntity } from '@app/domain/entity/UserEntity';

interface IGetUserUseCase {
  execute(userId: number): Promise<Result<UserEntity, string>>;
}

export type { IGetUserUseCase };
