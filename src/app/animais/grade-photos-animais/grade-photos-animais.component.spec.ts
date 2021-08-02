import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradePhotosAnimaisComponent } from './grade-photos-animais.component';

describe('GradePhotosAnimaisComponent', () => {
  let component: GradePhotosAnimaisComponent;
  let fixture: ComponentFixture<GradePhotosAnimaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradePhotosAnimaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradePhotosAnimaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
