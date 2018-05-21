import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Twitter} from '../../../model/twitter';
import {apiParams, apiPath} from '../../constants/api-constants';
import {SearchType} from '../../enum/search-type';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Api to call to backend and get Twitter with keyword (hashtah or user)
   * @param {string} searchStr
   * @param {SearchType} searchType
   * @returns {Observable<Twitter[]>}
   */
  searchTwitter(searchStr: string, searchType: SearchType): Observable<Twitter[]> {
    let params = new HttpParams();
    params = params.append(apiParams.pagesLimit, environment.api_page_limit);
    params = params.append(apiParams.wait, environment.api_wait);

    let api = apiPath.hashTags;

    if (searchType === SearchType.UserSearch) {
      api = apiPath.user;
    }

    return this.http.get<Twitter[]>( api + searchStr, {
      params: params});
  }
}
