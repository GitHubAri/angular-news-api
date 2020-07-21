import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../../news-api.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-catagory-wise',
  templateUrl: './catagory-wise.component.html',
  styleUrls: ['./catagory-wise.component.css']
})
export class CatagoryWiseComponent implements OnInit {

  mSources: Array<any>;
  cat_name: String;

  constructor(public appComponent: AppComponent) {
  }
  
  ngOnInit(): void {
    this.mSources = this.appComponent.update;
    this.cat_name = this.appComponent.cat_name;
  }
}
