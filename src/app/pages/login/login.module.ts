import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

// Routes
import { LoginRoutingModule } from './login-routing.module';

// Components
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [LoginRoutingModule, SharedModule]
})
export class LoginModule {}
