import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { ApprovalRequestsComponent } from './approval-requests/approval-requests.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserOrdersComponent,
    AllOrdersComponent,
    ApprovalRequestsComponent,
    ProfileComponent,
    ViewUsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Add this line
})
export class UsersModule { }