import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import * as constants from '../../../common/constants/common-constants';
import {Twitter} from '../../../model/twitter';
import {DataService} from '../../../common/service/data/data.service';

@Component({
  selector: 'app-result-search-table',
  templateUrl: './result-search-table.component.html',
  styleUrls: ['./result-search-table.component.scss']
})
export class ResultSearchTableComponent implements OnInit, OnDestroy {

  displayedColumns = [
    constants.RESULT_TABLE_TWEET,
    constants.RESULT_TABLE_LIKE,
    constants.RESULT_TABLE_REPLIES,
    constants.RESULT_TABLE_RETWEET,
    constants.RESULT_TABLE_HASHTAG,
    constants.RESULT_TABLE_DATE
  ];
  dataSource = new MatTableDataSource<Twitter>();

  pageSize = 10;

  itemSize = 0;

  dataSet = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.resultSearchDataChange.subscribe( result => {
      // this.dataSource.data = result;
      this.handlePaging(result);
      this.itemSize = result.length;
    });
  }

  ngOnDestroy() {
    this.dataService.resultSearchDataChange.unsubscribe();
  }

  /**
   * Hanlder for page change event
   * @param {number} currentPage
   */
  pageChanged(currentPage: number): void {
    const startIndex = this.pageSize * (currentPage - 1);
    this.dataSource.data = this.dataSet.slice(startIndex, startIndex + this.pageSize);
  }

  /**
   * Handle pagin to display data set ( 10 item in 1 page)
   * @param data
   */
  private handlePaging(data: any): void {
    this.dataSet = []; // empty current data set
    this.dataSet = data;

    // set data set to table's data source
    if (null != data && data.length > this.pageSize) {
      this.dataSource.data = this.dataSet.slice(0, 10);
    } else {
      this.dataSource.data = this.dataSet;
    }
  }
}


