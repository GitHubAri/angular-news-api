import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'News Hub';


  mSources: Array<any>;
  update: Array<any>;
  cat_name: String;
  searchText: String;

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }
  
  ngOnInit(): void {
  }

  searchArticles(source: String) {
    console.log("selected source is: " + source);
    this.cat_name = source;
    this.newsapi.getArticlesByCategory(source).subscribe(data => this.mSources = data['articles']);
    this.update = this.mSources;
  }
  
}
