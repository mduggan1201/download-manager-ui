"use client"

import React from 'react';
import styles from './DownloadTable.module.css';

type DownloadTableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;

const DownloadTableCell: React.FC<DownloadTableCellProps> = ({...props }) => (
  <td className={`${styles.tableCell}`} {...props} />
);

export default DownloadTableCell;