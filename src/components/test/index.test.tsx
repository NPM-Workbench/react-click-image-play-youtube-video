/// <reference types="jest" />
import React, { act } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { ReactYouTubeOverlay } from '../index';

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
  jest.useRealTimers();
});

describe('ReactYouTubeOverlay', () => {
  /* #1 */
  test('returns null when embedLink and embedTitle are empty strings', () => {
    const { container } = render(
      <ReactYouTubeOverlay embedLink="" embedTitle="" />,
    );

    expect(container.firstChild).toBeNull();
  });

  /* #2 */
  test('renders overlay content when embedLink and embedTitle are non-empty', async () => {
    render(
      <ReactYouTubeOverlay
        embedLink="https://www.youtube.com/embed/abc123"
        embedTitle="Demo Video"
      />,
    );

    expect(await screen.findByRole('button')).toBeInTheDocument();
    expect(screen.getByTitle('Demo Video')).toBeInTheDocument();
  });

  /* #3 */
  test('changes overlay state when close button is clicked', () => {
    jest.useFakeTimers();
    const onCloseFn = jest.fn();

    const { container } = render(
      <ReactYouTubeOverlay
        embedLink="https://www.youtube.com/embed/abc123"
        embedTitle="Demo Video"
        onCloseFn={onCloseFn}
      />,
    );

    act(() => {
      jest.advanceTimersByTime(120);
    });

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(
      document.querySelector('div.videoPlayerOverlay.hiddenTransform'),
    ).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(250);
    });

    expect(onCloseFn).toHaveBeenCalledTimes(1);
    expect(container.firstChild).toBeNull();
  });
});
