import {container} from 'tsyringe';
import {GetUserUseCase} from './../useCases/GetUserUseCase';
import {UserRepository} from './../repository/UserRepository';

// Registering dependencies in the DI container
container.register(UserRepository.name, {useClass: UserRepository});
container.register(GetUserUseCase.name, {useClass: GetUserUseCase});

// Exporting the container for use in other parts of the application
export {container};
