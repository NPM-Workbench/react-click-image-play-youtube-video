/// <reference types="jest" />
import React from 'react';
import { render, screen } from '@testing-library/react';

import MainDiv from '../main-div';

/* restore mocks after each test */
afterEach(() => {
  jest.restoreAllMocks();
});

describe('MainDiv', () => {
  /* #1 */
  test('renders visible overlay with children when show is true', () => {
    render(
      <MainDiv show>
        <p>Video Content</p>
      </MainDiv>,
    );

    const child = screen.getByText('Video Content');
    const overlay = child.parentElement;

    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass('videoPlayerOverlay');
    expect(overlay).not.toHaveClass('hiddenTransform');
  });

  /* #2 */
  test('renders hidden overlay without children when show is false', () => {
    render(
      <MainDiv show={false}>
        <p>Video Content</p>
      </MainDiv>,
    );

    expect(screen.queryByText('Video Content')).not.toBeInTheDocument();

    const overlay = document.querySelector('div.videoPlayerOverlay');
    expect(overlay).toBeInTheDocument();
    expect(overlay).toHaveClass('videoPlayerOverlay');
    expect(overlay).toHaveClass('hiddenTransform');
    expect(overlay?.childElementCount).toBe(0);
  });

  /* #3 */
  test('renders exactly 2 paragraph children when two paragraphs are provided', () => {
    render(
      <MainDiv show>
        <p>Paragraph One</p>
        <p>Paragraph Two</p>
      </MainDiv>,
    );

    const firstParagraph = screen.getByText('Paragraph One');
    const overlay = firstParagraph.parentElement as HTMLElement;
    const children = Array.from(overlay.children);

    expect(children).toHaveLength(2);
    expect(children.every((child) => child.tagName === 'P')).toBe(true);
  });
});
