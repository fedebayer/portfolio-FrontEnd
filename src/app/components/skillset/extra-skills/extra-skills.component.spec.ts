import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraSkillsComponent } from './extra-skills.component';

describe('ExtraSkillsComponent', () => {
  let component: ExtraSkillsComponent;
  let fixture: ComponentFixture<ExtraSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
