import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MtgService, MtgServiceMock } from './mtg.service';
import { cardListMock } from '_testMocks/card';
import { setListMock } from '_testMocks/set';
import { throwError } from 'rxjs';

describe('MtgService', () => {
  let service: MtgService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: MtgService,
          useClass: MtgServiceMock,
        },
      ],
    });
    service = TestBed.inject(MtgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return observer of cards when call listCards method', () => {
    service.listCards('teste').subscribe((data) => {
      expect(data).toEqual({ cards: cardListMock });
    });
  });

  it('should return oberser of sets when call findSets method', () => {
    service.findSets({ block: 'Zendikar' }).subscribe((data) => {
      expect(data).toEqual({ sets: setListMock });
    });
  });

  it('should catch a http error if findSets throw', () => {
    const error = {
      error: { error: 'not-found' },
    };
    spyOn(service, 'findSets').and.returnValue(throwError(error));
    service.findSets({ block: 'Zendikar' }).subscribe({
      error: (err) => expect(err).toEqual(error),
    });
  });


  it('should catch a http error if listCards throw', () => {
    const error = {
      error: { error: 'not-found' },
    };
    spyOn(service, 'listCards').and.returnValue(throwError(error));
    service.listCards('teste').subscribe({
      error: (err) => expect(err).toEqual(error),
    });
  });
});
