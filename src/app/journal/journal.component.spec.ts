import { ComponentFixture, TestBed } from '@angular/core/testing';

import { journalComponent } from './journal.component';

describe('journalComponent', () => {
  let component: journalComponent;
  let fixture: ComponentFixture<journalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ journalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(journalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
