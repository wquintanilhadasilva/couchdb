import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManterUfComponent } from './manter-uf/manter-uf.component';
import { EstadosBrComponent } from './estados-br/estados-br.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/ufs' },
    { path: 'ufs', component: EstadosBrComponent },
    { path: 'ufs/:id/editar', component: ManterUfComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
