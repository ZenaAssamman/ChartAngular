import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { AboutComponent } from './about/about.component';
import { ErgebnissComponent } from './ergebniss/ergebniss.component';

const routes: Routes = [
  {path : 'questions', component : QuestionsComponent},
  {path: 'about', component: AboutComponent},
  {path:'bar-chart',component:ErgebnissComponent},
  {path:'**', component:ErgebnissComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
