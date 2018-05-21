import {async, TestBed} from '@angular/core/testing';
import {TextTruncatePipe} from '../../../app/custom/pipe/text-truncate-pipe';

describe('textTruncatePipe: Default', () => {
  const textTruncatePipe = new TextTruncatePipe();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TextTruncatePipe
      ],
    }).compileComponents();
  }));

  // test case characters under limitation
  it('should not replace any string', function () {
    expect(textTruncatePipe.transform('abcd')).toBe('abcd');
  });

  // test case characters over limitation and it just break string without caring word break
  it('should replace and show ... at the end, dont care word break', function () {
    expect(textTruncatePipe.transform('abcd deft', 6)).toBe('abcd d...');
  });

  // test case characters over limitation and it just break string without caring word break
  it('should replace and show ... at the end and caring about word break', function () {
    expect(textTruncatePipe.transform('abcd deft', 6, true)).toBe('abcd...');
  });

  // test case characters over limitation and it just break string without caring word break
  it('should replace and show ___ at the end and dont care about word break', function () {
    expect(textTruncatePipe.transform('abcd deft', 6, false, '___')).toBe('abcd d___');
  });
});
