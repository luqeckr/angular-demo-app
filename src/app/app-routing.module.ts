import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';


const routes: Routes = [
  { path: '', component: BerandaComponent },
  { path: 'menu1', loadChildren: () => import('./menu1/menu1.module').then(m => m.Menu1Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
