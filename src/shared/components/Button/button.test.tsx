import { describe, expect, test } from 'vitest';

import '@testing-library/jest-dom';
import { render, screen, userEvent } from '../../../utils/test-utils';
import Button from './Button';

describe('Input', async () => {
  test('should render the button', () => {
    render(<Button />);
    expect(screen.getByText('Primary')).toBeInTheDocument();
  });
});
