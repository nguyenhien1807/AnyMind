import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() totalPage: number;

  @Input() currentPage = 1;

  @Input() itemSize: number;

  @Input() pageSize: number;

  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  private _pageNUmber: number[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
   this.initPagination();
  }

  /**
   * handle changing page event by click directly on page number
   * @param value
   */
  changePage(value: any) {
    this.currentPage = value;
    this.pageChanged.emit(this.currentPage);
  }

  /**
   * handle changing page by clicking on previous button
   */
   previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayPageRange(false);
    }
  }

  /**
   * handle changing page by clicking next page
   */
   nextPage(): void {
    if (this.currentPage < this.totalPage) {
      this.currentPage++;
      this.updateDisplayPageRange(true);
    }
  }

  private initPagination(): void {
    this._pageNUmber = [];
    this.totalPage = Math.ceil(this.itemSize / this.pageSize);
    this._pageNUmber.push(1);
    this._pageNUmber.push(2);
  }

  /**
   * Update page number display on UI, only 2 pages are display at same time
   * @param {boolean} movingNext
   */
  private updateDisplayPageRange(movingNext: boolean) {
    if (!this._pageNUmber.find(page => page === this.currentPage)) {
      this._pageNUmber = [];
      if (movingNext) {
        this._pageNUmber.push(this.currentPage - 1);
        this._pageNUmber.push(this.currentPage);
      } else {
        this._pageNUmber.push(this.currentPage);
        this._pageNUmber.push(this.currentPage + 1);
      }
    }
    this.pageChanged.emit(this.currentPage);
  }
}
