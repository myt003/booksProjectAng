import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyBookListComponent } from './modify-book-list.component';

describe('ModifyBookListComponent', () => {
  let component: ModifyBookListComponent;
  let fixture: ComponentFixture<ModifyBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyBookListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
