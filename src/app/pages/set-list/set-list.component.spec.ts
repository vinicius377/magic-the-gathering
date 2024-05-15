import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SetListComponent } from './set-list.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { routes } from 'app/app.routes';

describe('SetListComponent', () => {
  let component: SetListComponent;
  let fixture: ComponentFixture<SetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetListComponent, RouterModule.forRoot(routes)],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(component)
    expect(component).toBeTruthy();
  });
});
