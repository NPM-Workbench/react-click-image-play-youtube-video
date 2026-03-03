/// <reference types="jest" />
import React from 'react';
import { render, screen } from '@testing-library/react';

import FrameComponent from '../frame-component';

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('FrameComponent', () => {
  /* #1 */
  test('renders iframe with provided title', () => {
    render(
      <FrameComponent
        embedLink="https://www.youtube.com/embed/abc123"
        embedTitle="Demo Video"
      />,
    );

    expect(screen.getByTitle('Demo Video')).toBeInTheDocument();
  });

  /* #2 */
  test('builds src with autoplay, mute, and rel query params', () => {
    render(
      <FrameComponent
        embedLink="https://www.youtube.com/embed/abc123"
        embedTitle="Demo Video"
      />,
    );

    const iframe = screen.getByTitle('Demo Video');
    expect(iframe).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/abc123?autoplay=1&mute=0&rel=0',
    );
  });

  /* #3 */
  test('sets allow and allowFullScreen attributes', () => {
    render(
      <FrameComponent
        embedLink="https://www.youtube.com/embed/abc123"
        embedTitle="Demo Video"
      />,
    );

    const iframe = screen.getByTitle('Demo Video');
    expect(iframe).toHaveAttribute(
      'allow',
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
    );
    expect(iframe).toHaveAttribute('allowfullscreen');
  });
});
