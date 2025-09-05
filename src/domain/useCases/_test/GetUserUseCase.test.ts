import 'reflect-metadata';
import { UserEntity } from '@app/domain/entity/UserEntity';
import { container } from '@app/di/DiContainer';
import { GetUserUseCase } from '../GetUserUseCase';
import { UserRepository } from '@app/data/repository/UserRepository';
import { Result } from '@app/data/types';

describe('GetUserUseCase', () => {
  // Usuario de ejemplo retornado por el repositorio
  const UserEntityFromRepository = new UserEntity(
    '12345678-9',
    'Felipe',
    'felipe@example.com',
    new Date('1990-01-01'),
  );

  // Mock de UserRepository
  let mockUserRepository: jest.Mocked<UserRepository>;
  let useCase: GetUserUseCase;

  beforeEach(() => {
    mockUserRepository = {
      getById: jest.fn(),
    } as any;

    container.registerInstance(UserRepository, mockUserRepository);
    useCase = container.resolve(GetUserUseCase);
  });

  it('debería retornar un usuario existente', async () => {
    mockUserRepository.getById.mockResolvedValue({
      ok: true,
      value: UserEntityFromRepository,
    } as Result<UserEntity, string>);

    const result = await useCase.execute(1);

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value).toEqual(UserEntityFromRepository);
    }
  });

  it('debería retornar error si el usuario no existe', async () => {
    mockUserRepository.getById.mockResolvedValue({
      ok: false,
      error: 'No se ha podido obtener el usuario',
    } as Result<UserEntity, string>);

    const result = await useCase.execute(999);

    expect(result.ok).toBe(false);
    if (result.ok === false) {
      expect(result.error).toBe('No se ha podido obtener el usuario');
    }
  });
});
