import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map/map.component';
import { PageNotFoundComponent } from './map/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/map', pathMatch: 'full'},
  {path: 'map', component: MapComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
