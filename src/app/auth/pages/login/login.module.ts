import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageRoutingModule } from './login-routing.module';
import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LoginPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
