import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';
import { ContactComponent } from './contact/contact.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'breadcrumbs',
    component: BreadcrumbsComponent
  },
  {
    path:'**',
    component: P404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
