import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsBaseComponent } from './components-base.component';

describe('ComponentsBaseComponent', () => {
  let component: ComponentsBaseComponent;
  let fixture: ComponentFixture<ComponentsBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
