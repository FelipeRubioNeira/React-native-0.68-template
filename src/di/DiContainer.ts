import 'reflect-metadata';
import { container } from 'tsyringe';
import { GetUserUseCase } from '@app/domain/useCases/GetUserUseCase';
import { UserRepository } from '@app/data/repository/UserRepository';
import { UserService } from '@app/data/infrastructure/UserService';

// Registering dependencies in the DI container
container.register(UserRepository.name, { useClass: UserRepository });
container.register(GetUserUseCase.name, { useClass: GetUserUseCase });
container.register(UserService.name, { useClass: UserService });

// Exporting the container for use in other parts of the application
export { container };
