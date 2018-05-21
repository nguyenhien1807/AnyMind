export class DataServiceMock {
  private _searchText = 'python';

  get searchText(): string {
    return this._searchText;
  }
}
