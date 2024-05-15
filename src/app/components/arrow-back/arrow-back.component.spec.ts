import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ArrowBackComponent } from './arrow-back.component';

describe('ArrowBackComponent', () => {
  let component: ArrowBackComponent;
  let fixture: ComponentFixture<ArrowBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowBackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArrowBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event if click on arrow', () => {
    const arrow = fixture.debugElement.query(
      By.css('[data-testid="arrow_container"]'),
    ).nativeElement;
    spyOn(component.onClick, 'emit');
    arrow.click();

    expect(component.onClick.emit).toHaveBeenCalled();
  });

  it('should emit event if press Enter on arrow', () => {
    const arrow =  fixture.debugElement.query(
      By.css('[data-testid="arrow"]'),
    ).nativeElement;

    spyOn(component.onClick, 'emit');
    const event = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
    });

    arrow.dispatchEvent(event);
    fixture.detectChanges();

    expect(component.onClick.emit).toHaveBeenCalled();
  });
});
