import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOriginalContractsComponent } from './view-original-contracts.component';

describe('ViewOriginalContractsComponent', () => {
  let component: ViewOriginalContractsComponent;
  let fixture: ComponentFixture<ViewOriginalContractsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOriginalContractsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOriginalContractsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
