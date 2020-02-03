import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { NbModule } from '../../nb.module';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [CommonModule, NbModule],
  exports: [MainLayoutComponent]
})
export class MainLayoutModule {}
