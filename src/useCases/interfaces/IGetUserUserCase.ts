interface IGetUserUseCase {
  execute(userId: number): Promise<string>;
}

export type { IGetUserUseCase };
