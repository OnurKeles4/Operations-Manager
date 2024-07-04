import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infobox2Component } from './infobox2.component';

describe('Infobox2Component', () => {
  let component: Infobox2Component;
  let fixture: ComponentFixture<Infobox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infobox2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Infobox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
