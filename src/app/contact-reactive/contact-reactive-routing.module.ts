import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactReactiveComponent } from './contact-reactive.component';
import { DataResolverService } from '../resolvers/data.resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ContactReactiveComponent,
    resolve: { departments: DataResolverService }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactReactiveRoutingModule { }
