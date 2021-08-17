import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    UserComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
  ]
})
export class UsersModule { }
