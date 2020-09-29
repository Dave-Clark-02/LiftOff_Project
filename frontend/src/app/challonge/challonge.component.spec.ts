import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallongeComponent } from './challonge.component';

describe('ChallongeComponent', () => {
  let component: ChallongeComponent;
  let fixture: ComponentFixture<ChallongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
