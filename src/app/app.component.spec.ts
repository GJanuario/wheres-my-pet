import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import '@angular/localize/init';
import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
  });

  it('should render component', async () => {
    await render(AppComponent);

    expect(screen.getByTestId('app-title')).toBeTruthy();
    expect(screen.getByTestId('button')).toBeTruthy();
    expect(screen.getByTestId('image')).toBeTruthy();
    expect(screen.getByTestId('date')).toBeTruthy();
  });
});
