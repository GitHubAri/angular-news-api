import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../news-api.service';
import { AppComponent } from '../../app.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  mSources: Array<any>;

  catagory: String;

  constructor(private newsapi: NewsApiService,
    private appComponent: AppComponent) {
    console.log('app component constructor called');
  }
  ngOnInit(): void {

    this.catagory = this.appComponent.cat_name;
    //load articles
    this.newsapi.initArticlesDetails().subscribe(data => this.mSources = data['articles']);

  }

}
