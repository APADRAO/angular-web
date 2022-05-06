import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfdatasulComponent } from './nfdatasul.component';

describe('NfdatasulComponent', () => {
  let component: NfdatasulComponent;
  let fixture: ComponentFixture<NfdatasulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfdatasulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NfdatasulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
