import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsMenuComponent } from './credits-menu.component';

describe('CreditsMenuComponent', () => {
  let component: CreditsMenuComponent;
  let fixture: ComponentFixture<CreditsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditsMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
