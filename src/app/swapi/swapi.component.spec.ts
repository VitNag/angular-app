import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiComponent } from './swapi.component';

describe('SwapiComponent', () => {
  let component: SwapiComponent;
  let fixture: ComponentFixture<SwapiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwapiComponent]
    });
    fixture = TestBed.createComponent(SwapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
