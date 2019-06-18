export class CreateUserDto {
  readonly name: String;
  readonly email: String;
}

export class AuthUserDto {
  readonly name: String;
  readonly password: String;
}
