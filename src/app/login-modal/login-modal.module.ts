import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login-modal.component';


@NgModule({
  declarations: [LoginModalComponent],
  bootstrap: [LoginModalComponent],
  imports: [
    CommonModule
  ]
})
export class LoginModalModule { }
