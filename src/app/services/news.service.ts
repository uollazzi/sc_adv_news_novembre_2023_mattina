import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { SearchResponse } from '../models/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  search(q: string, searchIn: string = "title", pageSize: number = 10): Observable<SearchResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        "X-Api-Key": environment.NEWS_API_KEY
      })
    }

    const url = `${environment.NEWSAPI_BASE_URL}/everything?q=${encodeURI(q)}&language=it&searchIn=${searchIn}&pageSize=${pageSize}`;
    console.log(url);
    return this.http.get<SearchResponse>(url, httpOptions);
  }

  topHeadline(): Observable<SearchResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        "X-Api-Key": environment.NEWS_API_KEY
      })
    }

    const url = `${environment.NEWSAPI_BASE_URL}/top-headlines?language=it&pageSize=10`;
    console.log(url);
    return this.http.get<SearchResponse>(url, httpOptions);
  }
}
