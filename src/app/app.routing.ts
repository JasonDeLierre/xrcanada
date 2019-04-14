
import { AppComponent } from './app.component';
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './home/home.component'
import { WhoComponent } from './who/who.component'
import { JoinComponent } from './join/join.component'
import { DemandsComponent } from './demands/demands.component'
import { PrinciplesComponent } from './principles/principles.component'
import { MediaComponent } from './media/media.component'
import { ProvincesComponent } from './provinces/provinces.component';
import { QuebecComponent } from './provinces/quebec/quebec.component';
import { PeiComponent } from './provinces/pei/pei.component';
import { NovaScotiaComponent } from './provinces/nova-scotia/nova-scotia.component';
import { BcComponent } from './provinces/bc/bc.component';
import { AlbertaComponent } from './provinces/alberta/alberta.component';
import { OntarioComponent } from './provinces/ontario/ontario.component';


/*
 * NOTE: Updating routes? Don't forget to update the apache config
 */

const appRoutes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'who',
      component: WhoComponent
    },
    {
      path: 'demands',
      component: DemandsComponent
    },
    {
      path: 'principles',
      component: PrinciplesComponent
    },
    {
      path: 'media',
      component: MediaComponent
    },
    {
      path: 'join',
      component: JoinComponent
    },
    {
      path: 'provinces',
      component: ProvincesComponent
    },
    {
      path: 'quebec',
      component: QuebecComponent
    },
    {
      path: 'ontario',
      component: OntarioComponent
    },
    {
      path: 'alberta',
      component: AlbertaComponent
    },
    {
      path: 'bc',
      component: BcComponent
    },
    {
      path: 'nova-scotia',
      component: NovaScotiaComponent
    },
    {
      path: 'pei',
      component: PeiComponent
    },

    {
      path: '**',
      redirectTo: '/',
      pathMatch: 'full'
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { useHash: true,}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
