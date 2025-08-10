import { injectable } from 'tsyringe';
import { UserRepository } from '../repository/UserRepository';
import { IGetUserUseCase } from './interfaces';

@injectable()
export class GetUserUseCase implements IGetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(userId: number): Promise<string> {
    return this.userRepository.getUser(userId);
  }
}
