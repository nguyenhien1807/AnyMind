import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
// components area
import {AppComponent} from './app.component';
import {SearchFieldComponent} from './custom/component/search-field/search-field.component';
import {ContainerComponent} from './layout/container/container.component';
import {ResultSearchTableComponent} from './custom/component/result-search-table/result-search-table.component';
import {MatPaginatorModule, MatTableModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// declaration area
import {DatePipe} from '@angular/common';
import {ResultSearchTableHeaderPipe} from './custom/pipe/result-search-table-header-pipe';
import {ResultSearchTableContentPipe} from './custom/pipe/result-search-table-content-pipe';
import {TextTruncatePipe} from './custom/pipe/text-truncate-pipe';
import {MainBodyComponent} from './layout/main-body/main-body.component';
// services area
import {ApiService} from './common/service/api/api.service';
import {DataService} from './common/service/data/data.service';
import { PaginationComponent } from './custom/component/pagination/pagination.component';
import {FormsModule} from '@angular/forms';
import { InputSearchFilterDirective } from './custom/directive/input-search-filter/input-search-filter.directive';


@NgModule({
  declarations: [
    AppComponent,
    SearchFieldComponent,
    ContainerComponent,
    ResultSearchTableComponent,
    ResultSearchTableHeaderPipe,
    ResultSearchTableContentPipe,
    TextTruncatePipe,
    MainBodyComponent,
    PaginationComponent,
    InputSearchFilterDirective
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    DatePipe,
    DataService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
