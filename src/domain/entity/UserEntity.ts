import { Result } from '@app/data/types';

class UserEntity {
  private _rut: string;
  private _name: string;
  private _email: string;
  private _birthdate?: Date;

  constructor(rut: string, name: string, email: string, birthdate?: Date) {
    this._rut = rut;
    this._name = name;
    this._email = email;
    this._birthdate = birthdate;
  }
  // ------------------------- Getters ------------------------- //
  get rut(): string {
    return this._rut;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get birthdate(): Date | undefined {
    return this._birthdate;
  }

  // ------------------------- Setters ------------------------- //
  set name(newName: string) {
    this._name = newName;
  }
  set email(newEmail: string) {
    this._email = newEmail;
  }
  set birthdate(newBirthdate: Date | undefined) {
    this._birthdate = newBirthdate;
  }

  // ------------------------- Private methods ------------------------- //
  private validateStringField(newField: string, previousField: string): boolean {
    return newField !== previousField;
  }

  private validateDateField(newDate: Date, previousDate?: Date): boolean {
    if (newDate.getTime() === previousDate?.getTime()) {
      return false;
    }
    return true;
  }

  // ------------------------- Public methods ------------------------- //
  public getFullInfo(): string {
    return `RUT: ${this._rut}, Name: ${this._name}, Email: ${this._email}, Birthdate: ${
      this._birthdate ? this._birthdate.toDateString() : 'N/A'
    }`;
  }

  public updateInformation(
    name: string,
    email: string,
    birthdate: Date,
  ): Result<UserEntity, string> {
    if (!this.validateStringField(name, this._name)) {
      return { ok: false, error: 'Nombre inválido' };
    }
    if (!this.validateStringField(email, this._email)) {
      return { ok: false, error: 'Email inválido' };
    }
    if (!this.validateDateField(birthdate, this._birthdate)) {
      return { ok: false, error: 'Fecha de nacimiento inválida' };
    }

    this._name = name;
    this._email = email;
    this._birthdate = birthdate;

    return { ok: true, value: this };
  }
}

export { UserEntity };
