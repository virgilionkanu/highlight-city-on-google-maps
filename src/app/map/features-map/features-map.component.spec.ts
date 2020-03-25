import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesMapComponent } from './features-map.component';

describe('FeaturesMapComponent', () => {
  let component: FeaturesMapComponent;
  let fixture: ComponentFixture<FeaturesMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
