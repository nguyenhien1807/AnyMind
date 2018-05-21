import { Component } from '@angular/core';
import * as constants from './common/constants/common-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = constants.APP_TITLE;
}
