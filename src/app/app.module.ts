import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MenuComponent } from './menu/menu.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { MovieMenuComponent } from './movie-menu/movie-menu.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MuteButtonComponent } from './mute-button/mute-button.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MenuComponent,
    HeroSectionComponent,
    MainSectionComponent,
    MovieMenuComponent,
    MoviePageComponent,
    MainPageComponent,
    MovieCardComponent,
    MuteButtonComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
