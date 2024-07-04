import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infobox1Component } from './infobox1.component';

describe('Infobox1Component', () => {
  let component: Infobox1Component;
  let fixture: ComponentFixture<Infobox1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infobox1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Infobox1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
