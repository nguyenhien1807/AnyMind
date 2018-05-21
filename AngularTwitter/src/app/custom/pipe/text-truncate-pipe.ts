import {Pipe, PipeTransform} from '@angular/core';
import * as constants from '../../common/constants/common-constants';

@Pipe({name: 'TextTruncate'})
export class TextTruncatePipe implements PipeTransform {
  transform(value, limitation = 50, breakWord = false, ellipsis = constants.ELLIPSIS): any {
    let result = value || '';

    if (value) {

      // if user doesn't want to break the word then change limitation to last index of space in string
      if (breakWord) {
        limitation = value.substring(0, limitation).lastIndexOf(constants.SPACE);
      }
      if(value.length > limitation) {
        result = value.substring(0, limitation) + ellipsis;
      }
    }

    return result;
  }
}
