import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjecttraverseComponent } from './objecttraverse/objecttraverse.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [

  {
    path: '',
    component: ReactiveFormComponent
  },

  {
    path:'objecttraverse',
    component: ObjecttraverseComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
