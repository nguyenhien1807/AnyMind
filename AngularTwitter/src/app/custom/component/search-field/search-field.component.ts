import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormsModule, Validators} from '@angular/forms';
import {DataService} from '../../../common/service/data/data.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit, OnDestroy {

  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  @Input() placeHolder: string;

  loading = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.resultSearchDataChange.subscribe( data => {
      this.loading = false;
    });
  }

  ngOnDestroy() {
    this.dataService.resultSearchDataChange.unsubscribe();
  }

  /**
   * handle when text are changed in search field
   * @param {string} value
   */
  onSearchChanged(value: string) {
    if (value === '') {
      return;
    }
    this.searchTextChange.emit(value);
    this.loading = true;
  }
}
