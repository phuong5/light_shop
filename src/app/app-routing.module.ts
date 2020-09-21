import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(i => i.AdminModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./main/main.module').then(i => i.MainModule) },
  { path: '', loadChildren: () => import('./site/site.module').then(i => i.SiteModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
