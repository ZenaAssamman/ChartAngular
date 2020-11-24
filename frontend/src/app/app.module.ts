import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErgebnissComponent } from './ergebniss/ergebniss.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    StartComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    ErgebnissComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
