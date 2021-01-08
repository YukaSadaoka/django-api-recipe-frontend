import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface ArticleResponse{
  title: string;
  author: string;
  body: string;
  date: string;
  image: string;
}


@Injectable({
  providedIn: 'root'
})
export class MainService {
  baseUrl = 'http://localhost:8000/api/article/articles'
  // headers = new httpHea {
  //   "Content-Type": "application/json"
  // } 
  

  constructor(private http: HttpClient) { }
  //, {headers:this.headers}

  getArticle(){
    return this.http.get<ArticleResponse>(this.baseUrl)
  }
  
}
