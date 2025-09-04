import { Result } from '@app/data/types';
import { UserEntity } from '@app/domain/entity/UserEntity';

interface IUserRepository {
  getById(userId: number): Promise<Result<UserEntity, string>>;
  update(user: UserEntity): Promise<Result<string, string>>;
}

export default IUserRepository;
