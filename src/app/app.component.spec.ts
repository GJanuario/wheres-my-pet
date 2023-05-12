import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should render component', async () => {
    await render(AppComponent);

    expect(screen.getByTestId('app-title')).toBeTruthy();
  });
});
