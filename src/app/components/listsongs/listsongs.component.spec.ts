import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsongsComponent } from './listsongs.component';

describe('ListsongsComponent', () => {
  let component: ListsongsComponent;
  let fixture: ComponentFixture<ListsongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
