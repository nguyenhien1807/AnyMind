import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import * as constants from '../../common/constants/common-constants';
import {SearchType} from '../../common/enum/search-type';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  title = constants.APP_TITLE;

  hastagTabTitle = constants.HASTAG_SEARCH_TITLE;

  userTabTitle = constants.USER_SEARCH_TITLE;

  placeHolderTxt = constants.HASHTAG_PLACE_HOLDER;

  searchType = SearchType.HashtagSearch;

  constructor() { }

  ngOnInit() {
  }

  /**
   * handle tab change event
   * @param event
   */
  tabChanged(event: any) {
    if (event.target.innerText.toLowerCase() === this.hastagTabTitle.toLowerCase()) {
      this.placeHolderTxt = constants.HASHTAG_PLACE_HOLDER;
      this.searchType = SearchType.HashtagSearch;
    } else {
      this.placeHolderTxt = constants.USER_PLACE_HOLDER;
      this.searchType = SearchType.UserSearch;
    }
  }

}
