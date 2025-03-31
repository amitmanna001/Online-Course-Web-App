import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
   { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) }, 
   { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
   { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) }, 
   { path: 'header', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
