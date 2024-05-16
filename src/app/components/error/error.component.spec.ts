import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ErrorComponent } from './error.component';
import { SimpleChange } from '@angular/core';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change error message when error change', () => {
    component.error = 'not-found';

    component.ngOnChanges({
      error: new SimpleChange(null, component.error, false),
    });
    fixture.detectChanges();

    expect(component.errorMessage).toBe('Não encontrado.');
  });

  it('should go to back when click on back button', () => {
    spyOn(window.history, 'back');

    const button: HTMLButtonElement = fixture.debugElement.query(
      By.css('[data-testid="back_button"]'),
    ).nativeElement;
    button.click();

    expect(window.history.back).toHaveBeenCalled();
  });

  //it('should refresh page when click on refresh button', () => {
  //  spyOn(component, 'goToBack');

  //  const button: HTMLButtonElement = fixture.debugElement.query(
  //    By.css('[data-testid="reload_button"]'),
  //  ).nativeElement;
  //  button.click();

  //  expect(window.location.reload).toHaveBeenCalled();
  //});
});
