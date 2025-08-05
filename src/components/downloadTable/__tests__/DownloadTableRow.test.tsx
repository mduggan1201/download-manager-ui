import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DownloadTableRow from '../DownloadTableRow';
import { sampleDownloadData } from '@/lib/sampleData';

describe('DownloadTableRow', () => {
  it('renders all columns with correct data', () => {
    const item = {...sampleDownloadData[1], isSelected: false};
    render(
      <table>
        <tbody>
        <DownloadTableRow item={item} onSelect={jest.fn()}/>
        </tbody>
      </table>
    );
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.device)).toBeInTheDocument();
    expect(screen.getByText(item.path)).toBeInTheDocument();
    expect(screen.getByText('Available')).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  it('checkbox is checked when isSelected is true', () => {
    const item = {...sampleDownloadData[1], isSelected: true};
    render(
      <table>
        <tbody>
        <DownloadTableRow item={item} onSelect={jest.fn()}/>
        </tbody>
      </table>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('checkbox is disabled when status is scheduled', () => {
    const item = {...sampleDownloadData[0], isSelected: false};
    render(
      <table>
        <tbody>
        <DownloadTableRow item={item} onSelect={jest.fn()}/>
        </tbody>
      </table>
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();
  });

  it('calls onSelect with correct arguments when checkbox is clicked', () => {
    const item = {...sampleDownloadData[1], isSelected: false};
    const onSelect = jest.fn();
    render(
      <table>
        <tbody>
        <DownloadTableRow item={item} onSelect={onSelect}/>
        </tbody>
      </table>
    );
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onSelect).toHaveBeenCalledWith(item.id, true);
  });
});