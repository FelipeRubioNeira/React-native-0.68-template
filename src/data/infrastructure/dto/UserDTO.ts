interface ServiceDTO<PayloadType> {
  status: number;
  message: string;
  payload?: PayloadType;
}

interface UserDTO {
  rut: string;
  name: string;
  email: string;
  address?: string;
  birthdate?: string;
}

export type { UserDTO, ServiceDTO };
