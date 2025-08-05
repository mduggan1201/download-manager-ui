import React from 'react';
import { render, screen } from '@testing-library/react';
import DownloadTableCell from '../DownloadTableCell';

describe('DownloadTableCell', () => {
  it('renders passed props correctly', () => {
    render(
      <table>
        <tbody>
          <tr>
            <DownloadTableCell>Test Cell</DownloadTableCell>
          </tr>
        </tbody>
      </table>
    );
    expect(screen.getByText('Test Cell')).toBeInTheDocument();
  });
});

