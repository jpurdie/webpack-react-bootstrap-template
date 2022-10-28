import { describe, expect, test } from 'vitest';

import '@testing-library/jest-dom';
import { render, screen, userEvent } from '../../../utils/test-utils';
import Button from './Button';

describe('Input', async () => {
  test("should render the button with text 'foo'", () => {
    render(<Button text='foo' onClick={() => {}} type='primary' />);
    const el = screen.getByText('foo');
    expect(el).toBeInTheDocument();
  });

  test("should render the button with class 'primary'", () => {
    render(<Button text='foo' onClick={() => {}} type='primary' />);
    const el = screen.getByText('foo');
    const actual = el.classList.contains('btn-primary');
    expect(actual).toBe(true);
  });
});
