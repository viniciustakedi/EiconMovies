import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import appRoutes from './routerConfig';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { MoviesComponent } from './screens/movies/movies.component';
import { RouterModule } from '@angular/router';
import { ApiComponent } from './screens/api/api.component';
import { MoviesService } from './services/movies.service'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    MoviesComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MoviesService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
