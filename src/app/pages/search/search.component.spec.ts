import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not submit if form is invalid', () => {
    spyOn(router, 'navigate');

    expect(component.onSubmit()).toBeUndefined()
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should submit if form is valid', () => {
    const params = { block: 'tetse', name: 'nome' };
    component.searchParams.setValue(params);

    spyOn(router, 'navigate');

    component.onSubmit();
    expect(router.navigate).toHaveBeenCalledOnceWith(['sets'], {
      queryParams: params,
    });
  });
});
