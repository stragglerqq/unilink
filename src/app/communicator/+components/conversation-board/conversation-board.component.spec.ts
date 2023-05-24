import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConversationBoardComponent} from './conversation-board.component';

describe('ConversationBoardComponent', () => {
  let component: ConversationBoardComponent;
  let fixture: ComponentFixture<ConversationBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversationBoardComponent]
    });
    fixture = TestBed.createComponent(ConversationBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
