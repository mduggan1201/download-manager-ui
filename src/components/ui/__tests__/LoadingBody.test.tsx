import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingBody from '../LoadingBody';

describe('LoadingBody', () => {
  it('renders spinner and loading text when in a table body', () => {
    render(
      <table>
        <tbody>
          <LoadingBody tableWidth={3} />
        </tbody>
      </table>
    );
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });
});

