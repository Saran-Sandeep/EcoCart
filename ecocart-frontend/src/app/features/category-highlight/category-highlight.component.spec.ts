import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryHighlightComponent } from './category-highlight.component';

describe('CategoryHighlightComponent', () => {
  let component: CategoryHighlightComponent;
  let fixture: ComponentFixture<CategoryHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryHighlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
