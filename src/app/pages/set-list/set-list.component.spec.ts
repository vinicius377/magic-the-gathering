import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SetListComponent } from './set-list.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { routes } from 'app/app.routes';
import { MtgService, MtgServiceMock } from 'app/services/mtg.service';
import { By } from '@angular/platform-browser';

describe('SetListComponent', () => {
  let component: SetListComponent;
  let fixture: ComponentFixture<SetListComponent>;
  let route: Router;
  let activedRoute: ActivatedRoute;
  let mtgService: MtgService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetListComponent, RouterModule.forRoot(routes)],
      providers: [
        {
          provide: MtgService,
          useClass: MtgServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    route = TestBed.inject(Router);
    activedRoute = TestBed.inject(ActivatedRoute);
    mtgService = TestBed.inject(MtgService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    //  it('should redirect to search page if not have params', () => {
  //    const params = { block: 'tetse', name: 'nome' };
  //    route.navigate([], {queryParams: params})
  //    spyOn(mtgService, 'findSets')
  //
  //    expect(mtgService.findSets).toHaveBeenCalledWith(params)
  //  })

  //it('shoul go to cards when press Enter', () => {
  //  spyOn(route, 'navigate')
  //  const params = { block: 'tetse', name: 'nome' };
  //  route.navigate([], {queryParams: params})

  //  const card: HTMLDivElement = fixture.debugElement.query(
  //    By.css('[data-testid="card_container"]'),
  //  ).nativeElement;
  //  card.click()

  //  expect(route.navigate).toHaveBeenCalled()
  //});
});
