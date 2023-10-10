import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AssociationComponent} from "./association.component";

const routes: Routes = [
  {path: '', component: AssociationComponent},
  {
    path: 'technical',
    data: {title: $localize`Technical Workinggroup`},
    loadChildren: () => import('./workinggroup/technical/technical.module').then(m => m.TechnicalModule)
  },
  {
    path: 'public-relations',
    data: {title: $localize`Public Relations Workinggroup`},
    loadComponent: () => import('./workinggroup/public-relations/public-relations.component').then(m => m.PublicRelationsComponent)
  },
  {
    path: 'client-and-sponsors',
    data: {title: $localize`Client and Sponsors Workinggroup`},
    loadComponent: () => import('./workinggroup/clients-and-sponsors/clients-and-sponsors.component').then(m => m.ClientsAndSponsorsComponent),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociationRoutingModule {
}
