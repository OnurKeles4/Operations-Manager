import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Infobox4Component } from './infobox4.component';

describe('Infobox4Component', () => {
  let component: Infobox4Component;
  let fixture: ComponentFixture<Infobox4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Infobox4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Infobox4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});