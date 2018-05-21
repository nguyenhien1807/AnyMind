import {async, TestBed} from '@angular/core/testing';
import {ResultSearchTableContentPipe} from '../../../app/custom/pipe/result-search-table-content-pipe';
import * as constants from '../../../app/common/constants/common-constants';
import {longTweet, shortTweet} from '../../mock/twitterMock';
import {DatePipe} from '@angular/common';
import {DataService} from '../../../app/common/service/data/data.service';
import {DataServiceMock} from '../../mock/dataServiceMock';
import {TextTruncatePipe} from '../../../app/custom/pipe/text-truncate-pipe';

describe('ResultSearchTableContentPipe', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResultSearchTableContentPipe,
      ],
      providers: [
        DatePipe,
        {provide: DataService, useClass: DataServiceMock},
        TextTruncatePipe
      ]
    }).compileComponents();
  }));

  const dataPipe = TestBed.get(DatePipe);
  const dataService = TestBed.get(DataService);
  const textTruncatePipe = TestBed.get(TextTruncatePipe);
  const pipe = new ResultSearchTableContentPipe(dataPipe, dataService, textTruncatePipe);

  // test case get data for "Tweet" column
  it('should return contain of Tweet and have trailing ...' , function () {
    expect(pipe.transform(longTweet.text, constants.RESULT_TABLE_TWEET)).toBe('Very pleased to announce the 1.10 release of HoloV...');
  });

  // test case get data for "Tweet" column
  it('should return contain of Tweet and dont have trailing' , function () {
    expect(pipe.transform(shortTweet.text, constants.RESULT_TABLE_TWEET)).toBe('Very pleased to announce the 1.10 release');
  });

  // test case get data for "Likes" column
  it('should return number of Like', function () {
    expect(pipe.transform(longTweet.likes, constants.RESULT_TABLE_LIKE)).toBe(longTweet.likes);
  });

  // test case get data for "Likes" column
  it('should return - as like number', function () {
    expect(pipe.transform(shortTweet.likes, constants.RESULT_TABLE_LIKE)).toBe(constants.HYPHEN);
  });

  // test case get data for "Replies" column
  it('should return number of Replies', function () {
    expect(pipe.transform(longTweet.replies, constants.RESULT_TABLE_REPLIES)).toBe(longTweet.replies);
  });

  // test case get data for "Replies" column
  it('should return - as Replies number', function () {
    expect(pipe.transform(shortTweet.replies, constants.RESULT_TABLE_REPLIES)).toBe(constants.HYPHEN);
  });

  // test case get data for "ReTweets" column
  it('should return number of Retweet', function () {
    expect(pipe.transform(longTweet.retweets, constants.RESULT_TABLE_RETWEET)).toBe(longTweet.retweets);
  });

  // test case get data for "ReTweets" column
  it('should return - as number of Retweet', function () {
    expect(pipe.transform(longTweet.retweets, constants.RESULT_TABLE_RETWEET)).toBe(constants.HYPHEN);
  });

  // test case get data for "Hashtag" column
  it('should return hashtags, only 2 hashtags', function () {
    expect(pipe.transform(longTweet.hashtags, constants.RESULT_TABLE_HASHTAG)).toBe('#Python,#DataViz');
  });

  // test case get data for "Date" column
  it('should return date', function () {
    expect(pipe.transform(longTweet.date, constants.RESULT_TABLE_DATE, )).toBe('May 15, 2018');
  });
});
