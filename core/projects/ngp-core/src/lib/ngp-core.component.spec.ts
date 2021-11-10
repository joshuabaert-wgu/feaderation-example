import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgpCoreComponent } from './ngp-core.component';

describe('NgpCoreComponent', () => {
  let component: NgpCoreComponent;
  let fixture: ComponentFixture<NgpCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgpCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgpCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
