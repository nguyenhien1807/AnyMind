import {Directive, ElementRef, HostListener} from '@angular/core';
import {KeyCode} from '../../../common/enum/keyCode';
import {UtilsService} from '../../../common/service/utils/utils.service';

@Directive({
  selector: '[appInputSearchFilter]',
  providers: [
    UtilsService
  ]
})
export class InputSearchFilterDirective {

  constructor(private el: ElementRef,
              private utils: UtilsService) {
  }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = <KeyboardEvent> event;

    if (e.getModifierState && e.getModifierState('Shift')) {
      if (this.utils.keyFromValue(KeyCode, e.keyCode)) {
        e.preventDefault();
      }
    } else {
      return;
    }

  }
}
