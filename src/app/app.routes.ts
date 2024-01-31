import { Component, NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './product/index/index.component';
import { EditComponent } from './product/edit/edit.component';
import { CreateComponent } from './product/create/create.component';
import { ViewComponent } from './product/view/view.component';
export const routes: Routes = [
    {path:'', redirectTo:'product/index', pathMatch:'full'},
    {path:'product/index', component: IndexComponent},
    {path:'product/create', component: CreateComponent},
    {path:'product/:productId/edit', component: EditComponent},
    {path:'product/:productId/view', component: ViewComponent},
  ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class route{
 
}