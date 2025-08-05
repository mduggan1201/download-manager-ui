import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorBody from '../ErrorBody';

describe('ErrorBody', () => {
  it('renders error message when in a table body', () => {
    render(
      <table>
        <tbody>
          <ErrorBody tableWidth={3} />
        </tbody>
      </table>
    );
    expect(screen.getByText('An unexpected error occurred.')).toBeInTheDocument();
  });

  it('renders custom error message when provided', () => {
    const customMessage = 'Custom error message';
    render(
      <table>
        <tbody>
          <ErrorBody tableWidth={3} errorMessage={customMessage} />
        </tbody>
      </table>
    );
    expect(screen.getByText(customMessage)).toBeInTheDocument();

    expect(screen.queryByText('An unexpected error occurred.')).not.toBeInTheDocument();
  });
});