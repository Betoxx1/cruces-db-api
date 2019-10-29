import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableDinamicListComponent } from './data-table-dinamic-list.component';

describe('DataTableDinamicListComponent', () => {
  let component: DataTableDinamicListComponent;
  let fixture: ComponentFixture<DataTableDinamicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableDinamicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableDinamicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
