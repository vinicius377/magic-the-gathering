import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*
  it('should be invalid form if block is not filled', () => {
    expect(component.searchParams.invalid).toBeTrue()
  })

  it('should be invalid form if block is not filled', () => {
    const select = fixture.debugElement.nativeElement.querySelector('#select-block');
    select.value = 'teste'
    console.log(select)
    console.log(component.searchParams.invalid)
    expect(component.searchParams.invalid).toBeNull()
  })
  */

  it('should not submit if form is invalid', () =>{
    spyOn(router, 'navigate')

    expect(router.navigate).not.toHaveBeenCalled()
  })


  it('should submit if form is valid', () =>{
    const params = { block: 'tetse', name:'nome'}
    component.searchParams.setValue(params)

    spyOn(router, 'navigate');

    component.onSubmit()
    expect(router.navigate).toHaveBeenCalled()
  })
});
