import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Nebular
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbThemeModule } from '@nebular/theme';
import { NbLayoutModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbEvaIconsModule,
    NbLayoutModule,
    NbThemeModule.forRoot()
  ],
  exports: [NbLayoutModule]
})
export class NbModule {}
