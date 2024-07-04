import { TestBed } from '@angular/core/testing';
import { App2Component } from './app2.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App2Component],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App2Component);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'test2' title`, () => {
    const fixture = TestBed.createComponent(App2Component);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App2Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, test2');
  });
});
