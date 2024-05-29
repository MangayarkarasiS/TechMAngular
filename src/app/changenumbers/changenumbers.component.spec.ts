import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangenumbersComponent } from './changenumbers.component';

describe('ChangenumbersComponent', () => {
  let component: ChangenumbersComponent;
  let fixture: ComponentFixture<ChangenumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangenumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangenumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
