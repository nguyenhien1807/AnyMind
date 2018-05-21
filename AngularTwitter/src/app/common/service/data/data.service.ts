import {EventEmitter, Injectable, Output} from '@angular/core';
import {Twitter} from '../../../model/twitter';

@Injectable()
export class DataService {

  private _resultSearchData: Twitter[] = [];

  private _searchText: string;

  @Output() resultSearchDataChange: EventEmitter<Twitter[]> = new EventEmitter<Twitter[]>();

  constructor() { }

  /**
   * set responded searched Data
   * @param {Twitter[]} value
   */
  set resultSearchData(value: Twitter[]) {
    this._resultSearchData = value;
    this.resultSearchDataChange.emit(this._resultSearchData);
  }

  get searchText(): string {
    return this._searchText;
  }

  set searchText(value: string) {
    this._searchText = value;
  }
}
