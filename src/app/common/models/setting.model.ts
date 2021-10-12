export class Setting {

  public _id: string | undefined;
  public key: string | undefined;
  public value: string | undefined;
  public description: string | undefined;
  public status: boolean | undefined;
  constructor(init?: Partial<Setting>) {
    Object.assign(this, init);
  }
}
