export class UserPermission {

  public _id: string | undefined;

  public actions: string | undefined;
  public userId: number | undefined;

  constructor(init?: Partial<UserPermission>) {
    Object.assign(this, init);
  }
}
