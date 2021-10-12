export class User {

  public _id: string | undefined;
  public userName: string | undefined;
  public email: string | undefined;
  public firstName: string | undefined;
  public lastName: string | undefined;
  public phone: string | undefined;
  public password: string | undefined;
  public role: number | undefined;
  public active: number | undefined;
  public status: boolean | undefined;

  constructor(init?: Partial<User>) {
    Object.assign(this, init);
  }
}
