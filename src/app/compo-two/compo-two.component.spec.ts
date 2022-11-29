import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoTwoComponent } from './compo-two.component';

describe('CompoTwoComponent', () => {
  let component: CompoTwoComponent;
  let fixture: ComponentFixture<CompoTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompoTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
