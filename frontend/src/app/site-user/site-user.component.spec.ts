import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteUserComponent } from './site-user.component';

describe('SiteUserComponent', () => {
  let component: SiteUserComponent;
  let fixture: ComponentFixture<SiteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
