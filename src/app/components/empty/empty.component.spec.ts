import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EmptyComponent } from './empty.component';

describe('EmptyComponent', () => {
  let component: EmptyComponent;
  let fixture: ComponentFixture<EmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return to back page', () => {
    const button: HTMLButtonElement = fixture.debugElement.query(
      By.css('[data-testid="empty_button"]'),
    ).nativeElement;
    spyOn(window.history, 'back');

    button.click();

    expect(window.history.back).toHaveBeenCalled()
  });
});
