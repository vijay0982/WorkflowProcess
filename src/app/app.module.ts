import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ProcessWorkFlowComponent } from './process-work-flow/process-work-flow.component';
import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { ProjectComponent } from './project/project.component';
import { WorkflowComponent } from './workflow/workflow.component';

const appRoutes: Routes = [
 
  {
    
    path:'loginPage',
    component:LoginPageComponent
  },
  {
    path:'CustomerList',
    component:CustomerComponent
  },
  {
    path:'Activity',
    component:ActivityComponent
  },
  {
    path:'Project',
    component:ProjectComponent
  },
  {
    path:'Workflow',
    component:WorkflowComponent
  },
  {
    path: 'LandingPage',
    component: ProcessWorkFlowComponent
  },
  {
    path: '', redirectTo: '/CustomerList', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LoginPageComponent,
    ProcessWorkFlowComponent,
    ActivityComponent,
    ProjectComponent,
    WorkflowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
