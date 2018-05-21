import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  keyFromValue(enumType: any, value: any) {
    for (const k of Object.keys(enumType)) {
      if (enumType[k] === value) {
        return k;
      }
    }
    return undefined;
  }
}
