export class Group {

  public _id: string | undefined;
  public name: string | undefined;
  public description: string | undefined;

  constructor(init?: Partial<Group>) {
    Object.assign(this, init);
  }
}
