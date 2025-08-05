"use client"

import React from 'react';
import styles from './DownloadTable.module.css';

interface DownloadTableToolbarProps {
  selectedAvailableCount: number;
  availableCount: number;
  selectAllRef: React.RefObject<HTMLInputElement | null>;
  onSelectAll: (checked: boolean) => void;
  onDownloadSelected: () => void;
}

const DownloadTableToolbar: React.FC<DownloadTableToolbarProps> = ({
  selectedAvailableCount,
  availableCount,
  selectAllRef,
  onSelectAll,
  onDownloadSelected,
}) => {

  const allAvailableSelected = availableCount > 0 && selectedAvailableCount === availableCount;
  const isIndeterminate = selectedAvailableCount > 0 && selectedAvailableCount < availableCount;
  const isDisabled = selectedAvailableCount === 0;
  const selectedText = selectedAvailableCount === 0 ? 'None Selected' : `Selected ${selectedAvailableCount} `;

  return (
    <div className={styles.toolbar}>
      <input
        type="checkbox"
        checked={allAvailableSelected}
        ref={selectAllRef}
        data-indeterminate={isIndeterminate}
        onChange={e => onSelectAll(e.target.checked)}
        aria-label="Select all available downloads"
        className={styles.checkbox}
      />
      <span className={styles.selectedCount}>{selectedText}</span>
      <button
        className={styles.downloadSelectedBtn}
        disabled={isDisabled}
        onClick={onDownloadSelected}
        aria-label="Download selected files"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{ marginRight: 8 }}
        >
          <path d="M10 2v10m0 0l-4-4m4 4l4-4" stroke="#1a73e8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="4" y="16" width="12" height="2" rx="1" fill="#1a73e8"/>
        </svg>
        Download Selected
      </button>
    </div>
  );
};

export default DownloadTableToolbar;