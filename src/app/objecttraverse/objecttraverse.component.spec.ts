import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjecttraverseComponent } from './objecttraverse.component';

describe('ObjecttraverseComponent', () => {
  let component: ObjecttraverseComponent;
  let fixture: ComponentFixture<ObjecttraverseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjecttraverseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjecttraverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
