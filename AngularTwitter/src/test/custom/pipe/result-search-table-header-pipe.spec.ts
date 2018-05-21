import {async, TestBed} from '@angular/core/testing';
import {ResultSearchTableHeaderPipe} from '../../../app/custom/pipe/result-search-table-header-pipe';
import * as constants from '../../../app/common/constants/common-constants';
import {longTweet} from '../../mock/twitterMock';

describe('ResultSearchTableHeaderPipe', () => {
  const pipe = new ResultSearchTableHeaderPipe();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResultSearchTableHeaderPipe
      ],
    }).compileComponents();
  }));

  // test case get data for "Tweet" column
  it('should return containt of Tweet', function () {
    expect(pipe.transform(constants.RESULT_TABLE_TWEET, longTweet)).toBe(longTweet.text);
  });

  // test case get data for "Likes" column
  it('should return number of Like', function () {
    expect(pipe.transform(constants.RESULT_TABLE_LIKE, longTweet)).toBe(longTweet.likes);
  });

  // test case get data for "Replies" column
  it('should return number of Replies', function () {
    expect(pipe.transform(constants.RESULT_TABLE_REPLIES, longTweet)).toBe(longTweet.replies);
  });

  // test case get data for "ReTweets" column
  it('should return number of Retweet', function () {
    expect(pipe.transform(constants.RESULT_TABLE_RETWEET, longTweet)).toBe(longTweet.retweets);
  });

  // test case get data for "Hashtag" column
  it('should return hashtags', function () {
    expect(pipe.transform(constants.RESULT_TABLE_HASHTAG, longTweet)).toBe(longTweet.hashtags);
  });

  // test case get data for "Date" column
  it('should return date', function () {
    expect(pipe.transform(constants.RESULT_TABLE_DATE, longTweet)).toBe(longTweet.date);
  });

  // test case return empty string with input is invalid column name
  it('should return date', function () {
    expect(pipe.transform('abcd', longTweet)).toBe('');
  });
});
