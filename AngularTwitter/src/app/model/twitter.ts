import {Account} from './account';

export class Twitter {
  private _account: Account;
  private _date: Date;
  private _hashtags: string[];
  private _likes: number;
  private _replies: number;
  private _retweets: number;
  private _text: string;


  constructor(account: Account, date: Date, hashtags: string[], likes: number, replies: number, retweets: number, text: string) {
    this._account = account;
    this._date = date;
    this._hashtags = hashtags;
    this._likes = likes;
    this._replies = replies;
    this._retweets = retweets;
    this._text = text;
  }


  get account(): Account {
    return this._account;
  }

  set account(value: Account) {
    this._account = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get hashtags(): string[] {
    return this._hashtags;
  }

  set hashtags(value: string[]) {
    this._hashtags = value;
  }

  get likes(): number {
    return this._likes;
  }

  set likes(value: number) {
    this._likes = value;
  }

  get replies(): number {
    return this._replies;
  }

  set replies(value: number) {
    this._replies = value;
  }

  get retweets(): number {
    return this._retweets;
  }

  set retweets(value: number) {
    this._retweets = value;
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }
}
