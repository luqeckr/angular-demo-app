import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BerandaComponent } from './beranda/beranda.component';


const routes: Routes = [
  { path: '', component: BerandaComponent },
  { path: 'menu1', loadChildren: () => import('./menu1/menu1.module').then(m => m.Menu1Module) },
  { path: 'menu2', loadChildren: () => import('./menu2/menu2.module').then(m => m.Menu2Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
