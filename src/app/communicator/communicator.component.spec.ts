import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CommunicatorComponent} from './communicator.component';

describe('CommunicatorComponent', () => {
  let component: CommunicatorComponent;
  let fixture: ComponentFixture<CommunicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunicatorComponent]
    });
    fixture = TestBed.createComponent(CommunicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
