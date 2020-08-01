import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StokbarangComponent } from './stokbarang.component';

describe('StokbarangComponent', () => {
  let component: StokbarangComponent;
  let fixture: ComponentFixture<StokbarangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StokbarangComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StokbarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
