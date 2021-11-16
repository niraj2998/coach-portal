import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheeSectionComponent } from './coachee-section.component';

describe('CoacheeSectionComponent', () => {
  let component: CoacheeSectionComponent;
  let fixture: ComponentFixture<CoacheeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoacheeSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacheeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
