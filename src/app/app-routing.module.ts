import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CatagoryWiseComponent} from './components/catagory-wise/catagory-wise.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'news/:id', component:CatagoryWiseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
