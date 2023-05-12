import { render, screen } from '@testing-library/angular';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  it('should render component', async () => {
    await render(ButtonComponent);

    expect(screen.findByTestId('button')).toBeTruthy();
  });
});
