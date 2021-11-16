import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';
import { NamePipe } from './pipes/name.pipe';
import { DateFormatterPipe } from './pipes/date-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SearchByNamePipe,
    NamePipe,
    DateFormatterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
