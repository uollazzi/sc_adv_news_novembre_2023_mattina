export class LoginDTO {
  constructor(
    public email: string = "",
    public password: string = "",
  ) { }
}

export type User = {
  email: string;
  id: number;
  name: string;
}

export type LoggedUser = {
  user: User;
  accessToken: string;
}
