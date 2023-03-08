export interface IUser extends ICredentials{
  id: number,
  firstName: string,
  lastName: string
}

export interface ICredentials {
  username: string,
  password: string,
}