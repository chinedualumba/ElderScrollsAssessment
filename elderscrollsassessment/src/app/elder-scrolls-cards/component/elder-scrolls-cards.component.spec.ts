import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElderScrollsCardsComponent } from './elder-scrolls-cards.component';

describe('ElderScrollsCardsComponent', () => {
  let component: ElderScrollsCardsComponent;
  let fixture: ComponentFixture<ElderScrollsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElderScrollsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElderScrollsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
