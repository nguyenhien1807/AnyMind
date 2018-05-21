import {Pipe, PipeTransform} from '@angular/core';
import * as constants from '../../common/constants/common-constants';
import {TextTruncatePipe} from './text-truncate-pipe';
import {DataService} from '../../common/service/data/data.service';
import {DatePipe} from '@angular/common';

@Pipe({name: 'ResultSearchTableContentPipe'})
export class ResultSearchTableContentPipe implements PipeTransform {

  constructor(private dataService: DataService,
              private datePipe: DatePipe) {}

  transform(value, columnName: string): any {
    switch (columnName) {
      case constants.RESULT_TABLE_TWEET:
        return this.handleTextLength(value);
      case constants.RESULT_TABLE_REPLIES:
      case constants.RESULT_TABLE_LIKE:
      case constants.RESULT_TABLE_RETWEET:
        return this.handleCountNumber(value);
      case constants.RESULT_TABLE_HASHTAG:
        return this.handleHashTag(value);
      case constants.RESULT_TABLE_DATE:
        return this.handleDateTime(value, constants.DATE_FORMAT);
      default:
        return value;
    }
  }

  /**
   * this method will handle text length which exceed 50 characters
   * @param {string} text
   * @returns {string}
   */
  private handleTextLength(text: string): string {
    return new TextTruncatePipe().transform(text);
  }

  /**
   * This method will handle value for count number
   * if count number is 0 then it'll return '-' to display on UI
   * @param number
   * @returns {string}
   */
  private handleCountNumber(number: any): string {
    if (number <= 0) {
      return constants.HYPHEN;
    }
    return number;
  }

  /**
   * handle to display Date column as format "MMM dd, yyyy"
   * @param {string} value
   * @param {string} format
   * @returns {string}
   */
  private handleDateTime(value: string, format: string): string {
    const tempt = Date.parse(value.substring(value.indexOf(constants.HYPHEN) + 1));
    return this.datePipe.transform(tempt, constants.DATE_FORMAT);
  }

  /**
   * Method to handle data for Hashtag column,
   * display on 2 hashtag in case there're more than 2 hashtags
   * @param {string[]} values: hashtag list
   * @returns {string[]}
   */
  private handleHashTag(values: string[]): string[] {
    let result: string[] = [];
    const searchedHasTag = constants.HASH_TAG_SYMBOL.concat(
      this.dataService.searchText);
    if (null != values && values.length > 2) {
      result.push(values.find(item => item.toLowerCase() === searchedHasTag.toLowerCase()));
      values.some(function(value) {
        if (value.toLowerCase() !== searchedHasTag.toLowerCase()) {
          result.push(value);
          return true;
        }
      });
    } else {
      result = values;
    }
    return result;
  }
}
