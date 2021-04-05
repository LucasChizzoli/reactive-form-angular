import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormContainerComponent } from './form-container.component';
import { FormManagerComponent } from '../form-manager.component';

describe('FormContainerComponent', () => {
  let component: FormContainerComponent;
  let fixture: ComponentFixture<FormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContainerComponent, FormContainerComponent, FormManagerComponent  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
