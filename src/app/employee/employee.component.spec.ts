import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthenticationService } from '../authentication.service';

import { EmployeeComponent } from './employee.component';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  let authService: AuthenticationService;
  let h1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers: [ AuthenticationService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    authService = TestBed.get(AuthenticationService)
    component = fixture.componentInstance;

    h1 = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create return value "Salary Slip"', () => {
  //   spyOn(authService, 'checkAuth');
  //   let salSlip = component.getSalarySlip();

  //   // expect(salSlip).toEqual('Salary Slip');
  //   expect(authService.checkAuth).toHaveBeenCalled();
  // });

  // it('should check if "checkAyth" is called and val returned', () => {
  //   spyOn(authService, 'checkAuth').and.returnValue(true);
  //   let salSlip = component.getSalarySlip();
  //   expect(salSlip).toEqual('Salary Slip');
  //   expect(authService.checkAuth).toHaveBeenCalled();
  // });

  it('should assert value for h1 element to be value of component', () => {
    component.getSalarySlip();
    fixture.detectChanges()
    expect(h1.textContent).toBe(component.salSlip)
  });
});
