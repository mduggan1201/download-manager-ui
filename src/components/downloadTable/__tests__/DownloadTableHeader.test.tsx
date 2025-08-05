import React from 'react';
import { render, screen } from '@testing-library/react';
import DownloadTableHeader from '../DownloadTableHeader';

describe('DownloadTableHeader', () => {
  it('renders the table header with correct column names', () => {
    render(
      <table>
        <DownloadTableHeader  />
      </table>
    );

    expect(screen.getByLabelText(/Select/i)).toBeInTheDocument();
    expect(screen.getByText(/Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Device/i)).toBeInTheDocument();
    expect(screen.getByText(/Path/i)).toBeInTheDocument();
    expect(screen.getByText(/Status/i)).toBeInTheDocument();
  });

});