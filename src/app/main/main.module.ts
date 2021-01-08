import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [MainHomeComponent, MainSectionComponent, CardComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
  ],
})
export class MainModule { }
