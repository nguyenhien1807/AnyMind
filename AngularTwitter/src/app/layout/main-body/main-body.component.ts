import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {ApiService} from '../../common/service/api/api.service';
import {DataService} from '../../common/service/data/data.service';
import {SearchType} from '../../common/enum/search-type';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit, OnChanges {

  @Input('subTitle') title: string;

  @Input() placeHolderTxt: string;

  @Input() searchType: SearchType = SearchType.HashtagSearch;

  constructor(private apiService: ApiService,
              private dataService: DataService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}): void {
    this.dataService.resultSearchData = [];
  }

  /**
   * handle search text changing event
   * @param {string} value
   */
  searchTextChange(value: string) {
    this.apiService.searchTwitter(value, this.searchType).subscribe(response => {
      this.dataService.resultSearchData = response;
    }, error => {
      this.dataService.resultSearchData = [];
    });

    this.dataService.searchText = value;
  }

}
