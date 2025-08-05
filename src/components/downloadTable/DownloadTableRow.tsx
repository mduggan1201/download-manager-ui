"use client"

import React from 'react';
import styles from './DownloadTable.module.css';
import { DownloadItem } from '@/types/download-manager';
import DownloadTableCell from '@/components/downloadTable/DownloadTableCell';

interface DownloadTableRowProps {
  item: DownloadItem
  onSelect: (id: string, checked: boolean) => void;
}

const DownloadTableRow: React.FC<DownloadTableRowProps> = ({ item, onSelect }) => {

  const isDisabled = item.status === 'scheduled'
  const statusTag = item.status.charAt(0).toUpperCase() + item.status.slice(1)


  return (
    <tr
      className={`${styles.tableRow} ${item.isSelected ? styles.selected : ''}`}
    >
      <td>
        <input
          type="checkbox"
          checked={item.isSelected ?? false}
          onChange={e => onSelect(item.id, e.target.checked)}
          aria-label={`Select to download item ${item.name}`}
          className ={styles.checkbox}
          disabled={isDisabled}
        />
      </td>
      <DownloadTableCell>{item.name}</DownloadTableCell>
      <DownloadTableCell>{item.device}</DownloadTableCell>
      <DownloadTableCell>{item.path}</DownloadTableCell>
      <DownloadTableCell>
          {item.status === 'available' && <span className={styles.statusDot} />}
          {statusTag}
      </DownloadTableCell>
    </tr>
  );
};

export default DownloadTableRow;