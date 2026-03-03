/// <reference types="jest" />
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import CloseBtn from '../close-button';

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('CloseBtn', () => {
  /* #1 */
  test('renders a button with closeIcon class and type button', () => {
    const handleOnClick = jest.fn();
    render(<CloseBtn handleOnClick={handleOnClick} />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('closeIcon');
    expect(button).toHaveAttribute('type', 'button');
  });

  /* #2 */
  test('calls handleOnClick when clicked', () => {
    const handleOnClick = jest.fn();
    render(<CloseBtn handleOnClick={handleOnClick} />);

    fireEvent.click(screen.getByRole('button'));
    expect(handleOnClick).toHaveBeenCalledTimes(1);
  });
});
