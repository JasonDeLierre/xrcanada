import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { RoutingModule } from './app.routing'
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';

// Routes
import { WhoComponent } from './who/who.component';
import { JoinComponent } from './join/join.component';
import { PrinciplesComponent } from './principles/principles.component';
import { DemandsComponent } from './demands/demands.component';
import { MainComponent } from './main/main.component';
import { MediaComponent } from './media/media.component';



@NgModule({
  declarations: [
    AppComponent,
    WhoComponent,
    JoinComponent,
    PrinciplesComponent,
    DemandsComponent,
    MainComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    MatButtonModule,
    RoutingModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
