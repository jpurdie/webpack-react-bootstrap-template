import { describe, expect, test } from 'vitest';

import '@testing-library/jest-dom';
import { render, screen, userEvent } from '../../../utils/test-utils';
import Alert from './Alert';

describe('Alert', async () => {
  test('should render the alert', () => {
    render(<Alert />);
    expect(screen.getByText('A simple primary alert—check it out!')).toBeInTheDocument();
  });
});
