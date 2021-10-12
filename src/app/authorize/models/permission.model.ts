export class Permission {

  public _id: string | undefined;
  public name: string | undefined;
  public active: boolean | undefined;
  public description: string | undefined;

  constructor(init?: Partial<Permission>) {
    Object.assign(this, init);
  }
}
