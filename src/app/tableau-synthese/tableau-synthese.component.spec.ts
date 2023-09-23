import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauSyntheseComponent } from './tableau-synthese.component';

describe('TableauSyntheseComponent', () => {
  let component: TableauSyntheseComponent;
  let fixture: ComponentFixture<TableauSyntheseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauSyntheseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableauSyntheseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
