import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';



const routes: Routes = [
  /** Set deafult router to home module . */
  { path: '', loadChildren: './home/home.module#HomeModule' },
];



/** Using lazy load module so that bigger bundle won't affect network speed. */

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
