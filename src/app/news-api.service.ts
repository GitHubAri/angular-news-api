import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'f7dfc23aa68f4d68b59a6b646b4c51aa';

  constructor(private http:HttpClient) { }

  initSourcesArticles(){
   return this.http.get('https://newsapi.org/v2/sources?apiKey='+this.api_key);
  }

  initLatestArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=in&apiKey='+this.api_key);
   }

  initArticlesDetails(){
    return this.http.get('https://newsapi.org/v2/everything?q=politics&apiKey='+this.api_key);
  }

  getArticlesByCategory(category: String){
    return this.http.get('https://newsapi.org/v2/everything?q='+category+'&apiKey='+this.api_key);
  }

  getArticlesByID(source: String){
   return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
} 
