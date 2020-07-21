import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../news-api.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {

  mArticles: Array<any>;

  constructor(private newsapi: NewsApiService) {
    console.log('app component constructor called');
  }
  
  ngOnInit(): void {
    this.newsapi.initLatestArticles().subscribe(data => this.mArticles = data['articles']);

  }

}
