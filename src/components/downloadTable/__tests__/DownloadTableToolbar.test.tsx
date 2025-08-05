import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DownloadTableToolbar from '../DownloadTableToolbar';

describe('DownloadTableToolbar', () => {
  const setup = (props = {}) => {
    const defaultProps = {
      selectedAvailableCount: 2,
      availableCount: 3,
      selectAllRef: React.createRef(),
      onSelectAll: jest.fn(),
      onDownloadSelected: jest.fn(),
      ...props,
    };
    render(<DownloadTableToolbar {...defaultProps} />);
    return defaultProps;
  };

  it('renders selected count text correctly', () => {
    setup({ selectedAvailableCount: 2 });
    expect(screen.getByText('Selected 2')).toBeInTheDocument();
    setup({ selectedAvailableCount: 0 });
    expect(screen.getByText('None Selected')).toBeInTheDocument();
  });

  it('checkbox is checked when all available are selected', () => {
    setup({ selectedAvailableCount: 3, availableCount: 3 });
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('checkbox is not checked when none are selected', () => {
    setup({ selectedAvailableCount: 0, availableCount: 3 });
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('checkbox is indeterminate when some but not all are selected', () => {
    setup({ selectedAvailableCount: 1, availableCount: 3 });
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    expect(screen.getByRole('checkbox').getAttribute('data-indeterminate')).toBe('true');
  });

  it('calls onSelectAll when checkbox is clicked', () => {
    const onSelectAll = jest.fn();
    setup({ selectedAvailableCount: 0, availableCount: 3, onSelectAll });
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onSelectAll).toHaveBeenCalledWith(true);
  });

  it('download button is disabled when none selected', () => {
    setup({ selectedAvailableCount: 0 });
    expect(screen.getByRole('button', { name: /download selected/i })).toBeDisabled();
  });

  it('download button is enabled when some are selected', () => {
    setup({ selectedAvailableCount: 2 });
    expect(screen.getByRole('button', { name: /download selected/i })).not.toBeDisabled();
  });

  it('calls onDownloadSelected when download button is clicked', () => {
    const onDownloadSelected = jest.fn();
    setup({ selectedAvailableCount: 2, onDownloadSelected });
    fireEvent.click(screen.getByRole('button', { name: /download selected/i }));
    expect(onDownloadSelected).toHaveBeenCalled();
  });
});

