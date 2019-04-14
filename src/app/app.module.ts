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
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { ProvincesComponent } from './provinces/provinces.component';
import { QuebecComponent } from './provinces/quebec/quebec.component';
import { AlbertaComponent } from './provinces/alberta/alberta.component';
import { BcComponent } from './provinces/bc/bc.component';
import { OntarioComponent } from './provinces/ontario/ontario.component';
import { PeiComponent } from './provinces/pei/pei.component';
import { NovaScotiaComponent } from './provinces/nova-scotia/nova-scotia.component';




@NgModule({
  declarations: [
    AppComponent,
    WhoComponent,
    JoinComponent,
    PrinciplesComponent,
    DemandsComponent,
    HomeComponent,
    MediaComponent,
    ProvincesComponent,
    QuebecComponent,
    AlbertaComponent,
    BcComponent,
    OntarioComponent,
    PeiComponent,
    NovaScotiaComponent
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
