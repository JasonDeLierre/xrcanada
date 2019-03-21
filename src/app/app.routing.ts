import { AppComponent } from './app.component';
import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { MainComponent } from './main/main.component'
import { WhoComponent } from './who/who.component'
import { JoinComponent } from './join/join.component'
import { DemandsComponent } from './demands/demands.component'
import { PrinciplesComponent } from './principles/principles.component'
import { MediaComponent } from './media/media.component'


const appRoutes: Routes = [
    {
      path: '',
      component: MainComponent
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