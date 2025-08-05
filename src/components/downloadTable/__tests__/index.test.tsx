import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import DownloadTable from '../index';
import { DownloadItem } from '@/types/download-manager';

jest.useFakeTimers();

describe('DownloadTable integration', () => {
  const baseData: DownloadItem[] = [
    { id: '1', name: 'smss.exe', device: 'Mario', path: '...', status: 'scheduled' },
    { id: '2', name: 'netsh.exe', device: 'Luigi', path: '...', status: 'available' },
  ];

  it('shows loading state initially', () => {
    render(<DownloadTable testData={baseData} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders table rows after loading', async () => {
    render(<DownloadTable testData={baseData} />);
    jest.runAllTimers();
    await waitFor(() => expect(screen.getByText('smss.exe')).toBeInTheDocument());
    expect(screen.getByText('Mario')).toBeInTheDocument();
    expect(screen.getByText('netsh.exe')).toBeInTheDocument();
  });

  it('shows empty state if no data', async () => {
    render(<DownloadTable testData={[]} />);
    jest.runAllTimers();
    await waitFor(() => expect(screen.getByText(/no data/i)).toBeInTheDocument());
  });

  it('shows error state if fetch fails', async () => {
    render(<DownloadTable testData={baseData} testError={true} />);
    jest.runAllTimers();
    await waitFor(() => expect(screen.getByText(/failed to fetch data/i)).toBeInTheDocument());
  });

  it('selects and downloads available items', async () => {
    render(<DownloadTable testData={baseData} />);
    jest.runAllTimers();
    await waitFor(() => expect(screen.getByText('netsh.exe')).toBeInTheDocument());
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    const downloadBtn = screen.getByRole('button', { name: /download selected/i });
    expect(downloadBtn).not.toBeDisabled();
  });
});
