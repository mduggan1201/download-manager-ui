"use client"

import React from 'react';
import styles from './DownloadTable.module.css';

const DownloadTableHeader: React.FC = () => (
  <thead className={styles.tableHeader}>
    <tr>
      <th aria-label="Select" />
      <th>Name</th>
      <th>Device</th>
      <th>Path</th>
      <th>Status</th>
    </tr>
  </thead>
);

export default DownloadTableHeader;