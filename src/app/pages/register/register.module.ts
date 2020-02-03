import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RegisterRoutingModule } from './register-routing.module';

// Components
import { RegisterComponent } from './register.component';
import { RegisterFormComponent } from './register-form/register-form.component';

@NgModule({
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ],
  imports: [SharedModule, RegisterRoutingModule]
})
export class RegisterModule {}
