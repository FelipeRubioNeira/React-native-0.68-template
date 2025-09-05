import 'reflect-metadata';
import { UserService } from '@app/data/infrastructure/UserService';
import { container } from '@app/di/DiContainer';
import { UserRepository } from '../UserRepository';
import { UserDTO } from '@app/data/infrastructure/dto/UserDTO';

describe('UserRepository', () => {
  // Mock del UserService
  const UserEntityFromService: UserDTO = {
    rut: '12345678-9',
    name: 'Felipe',
    email: 'email@mail.com',
    address: 'Calle Falsa 123',
    birthdate: '1990-01-01',
  };

  // Mock del UserService
  let mockUserService: jest.Mocked<UserService>;
  let userRepository: UserRepository;

  beforeEach(() => {
    mockUserService = {
      getById: jest.fn(),
      update: jest.fn(),
    };

    // Registrar el mock en el contenedor de dependencias
    container.registerInstance(UserService, mockUserService);
    userRepository = container.resolve(UserRepository);
  });

  describe('getById', () => {
    it('debería obtener un usuario por ID', async () => {
      mockUserService.getById.mockResolvedValue({
        ok: true,
        value: UserEntityFromService,
      });

      const result = await userRepository.getById(1);

      expect(result.ok).toBe(true);
      if (result.ok) {
        const { rut, name, email, birthdate } = result.value;

        expect(result.value).toBeDefined();
        // verificar que las propiedades coinciden
        expect(rut).toBeDefined();
        expect(name).toBeDefined();
        expect(email).toBeDefined();

        const isBirthdateValid = birthdate === undefined || birthdate instanceof Date;
        expect(isBirthdateValid).toBe(true);
      }
    });
    it('debería manejar error al obtener usuario por ID', async () => {});
  });

  describe('update', () => {
    it('debería actualizar un usuario', async () => {});
    it('debería manejar error al actualizar un usuario', async () => {});
  });
});
