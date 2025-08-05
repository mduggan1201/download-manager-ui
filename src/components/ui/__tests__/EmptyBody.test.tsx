import React from 'react';
import { render, screen } from '@testing-library/react';
import EmptyDataBody from '../EmptyDataBody';

describe('EmptyDataBody', () => {
  it('renders a display for an empty body', () => {
    render(
      <table>
        <tbody>
          <EmptyDataBody tableWidth={3} />
        </tbody>
      </table>
    );
    expect(screen.getByText(/No Data returned/i)).toBeInTheDocument();
  });
});

