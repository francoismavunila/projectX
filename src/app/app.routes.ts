import { Routes } from '@angular/router';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { DashboardComponent } from './main-components/dashboard/dashboard.component';
import { AttendanceComponent } from './main-components/attendance/attendance.component';

import { AnalyticsComponent } from './main-components/analytics/analytics.component';
import { UsersComponent } from './main-components/users/users.component';

import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './main-components/home/home.component';
import { LeaveComponent } from './main-components/leave/leaves.component';
import { UserDetailComponent } from './main-components/user-detail/user-detail.component';
import { ItSupportComponent } from './main-components/it-support/it-support.component';
import { NewUserComponent } from './main-components/new-user/new-user.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: '', 
    component: LayoutComponent, 
    children: [
        { path: '', component: HomeComponent },
        { path: 'attendance', component: AttendanceComponent },
        {path:'',component:DashboardComponent},
        {path:'attendance',component:AttendanceComponent},
        {path:'leave',component:AttendanceComponent},
        {path:'analytics',component:AnalyticsComponent},
        {path:'users',component:UsersComponent},
        {path:'user-detail',component:UserDetailComponent},
        {path: 'it-support', component: ItSupportComponent},
        {path: 'new-user', component: NewUserComponent},
    ]
  }

];
