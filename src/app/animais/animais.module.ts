import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { CartaoModule } from '../componentes/cartao/cartao.module';
import { GradePhotosAnimaisComponent } from './grade-photos-animais/grade-photos-animais.component';


@NgModule({
  declarations: [ListaAnimaisComponent, AnimalComponent, GradePhotosAnimaisComponent],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule
  ]
})
export class AnimaisModule { }
