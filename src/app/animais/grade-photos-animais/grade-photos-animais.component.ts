import { Component, Input, OnInit } from '@angular/core';
import { Animais } from '../animais';

@Component({
  selector: 'app-grade-photos-animais',
  templateUrl: './grade-photos-animais.component.html',
  styleUrls: ['./grade-photos-animais.component.css']
})
export class GradePhotosAnimaisComponent implements OnInit {

  @Input() animais!: Animais;

  constructor() { }

  ngOnInit(): void {
  }

}
