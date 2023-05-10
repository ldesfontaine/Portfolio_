import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleVeilleComponent } from './article-veille.component';

describe('ArticleVeilleComponent', () => {
  let component: ArticleVeilleComponent;
  let fixture: ComponentFixture<ArticleVeilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleVeilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleVeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
