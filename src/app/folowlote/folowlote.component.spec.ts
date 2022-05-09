import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolowloteComponent } from './folowlote.component';

describe('FolowloteComponent', () => {
  let component: FolowloteComponent;
  let fixture: ComponentFixture<FolowloteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolowloteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolowloteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
