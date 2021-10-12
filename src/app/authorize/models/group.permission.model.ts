export class GroupPermission {

  public _id: string | undefined;
  public actions: string | undefined;
  public groupId: number | undefined;

  constructor(init?: Partial<GroupPermission>) {
    Object.assign(this, init);
  }
}
