import {injectable} from 'tsyringe';

@injectable()
export class UserRepository {
  public async getUser(userId: number): Promise<string> {
    return `User ${userId}`;
  }
}
