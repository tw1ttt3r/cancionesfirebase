import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsongComponent } from './itemsong.component';

describe('ItemsongComponent', () => {
  let component: ItemsongComponent;
  let fixture: ComponentFixture<ItemsongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
