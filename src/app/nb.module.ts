import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Nebular
import { NbAuthComponent } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule } from '@nebular/theme';
import {
  NbPasswordAuthStrategy,
  NbAuthModule
} from '@nebular/auth';
import { NbLayoutModule } from '@nebular/theme';

const API_KEY =
  'AIzaSyD6zKEBUnIEZncpXotrd9FPuMohuP11J94';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbEvaIconsModule,
    NbLayoutModule,
    NbThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint:
            'https://identitytoolkit.googleapis.com/v1',
          login: {
            endpoint: `/accounts:signInWithPassword?key=${API_KEY}`,
            method: 'post'
          },
          register: {
            endpoint: `/accounts:signUp?key=${API_KEY}`,
            method: 'post'
          }
        })
      ],
      forms: {}
    })
  ],
  exports: [NbAuthComponent, NbLayoutModule],
  providers: []
})
export class NbModule {}
