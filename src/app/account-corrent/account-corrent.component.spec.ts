import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCorrentComponent } from './account-corrent.component';

describe('AccountCorrentComponent', () => {
  let component: AccountCorrentComponent;
  let fixture: ComponentFixture<AccountCorrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCorrentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCorrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
