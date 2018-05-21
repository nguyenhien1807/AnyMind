import {Pipe, PipeTransform} from '@angular/core';
import * as constants from '../../common/constants/common-constants';

@Pipe({name: 'ResultSearchTableHeaderPipe'})
export class ResultSearchTableHeaderPipe implements PipeTransform {
  transform(value, Twitter): any {
    switch (value) {
      case constants.RESULT_TABLE_TWEET:
        return Twitter.text;
      case constants.RESULT_TABLE_LIKE:
        return Twitter.likes;
      case constants.RESULT_TABLE_REPLIES:
        return Twitter.replies;
      case constants.RESULT_TABLE_RETWEET:
        return Twitter.retweets;
      case constants.RESULT_TABLE_HASHTAG:
        return Twitter.hashtags;
      case constants.RESULT_TABLE_DATE:
        return Twitter.date;
      default:
        return '';
    };
  }
}
