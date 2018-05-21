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

  changePage(value: any) {
    this.currentPage = value;
    this.pageChanged.emit(this.currentPage);
  }

   previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayPageRange(false);
    }
  }

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
