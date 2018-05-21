export class Account {
  private _fullname: string;
  private _href: string;
  private _id: number;

  constructor(fullname: string, href: string, id: number) {
    this._fullname = fullname;
    this._href = href;
    this._id = id;
  }
}
