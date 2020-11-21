import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { GalaxyService } from '../app/service/galaxy.service';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DisplayStarShipsComponent } from '../app/components/display-star-ships/display-star-ships.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core'; // for translating the title
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; // for translating

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsComponent,
    CalculatorComponent,
    DisplayStarShipsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatTabsModule,
    FormsModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: false,
    }),
  ],
  providers: [GalaxyService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
