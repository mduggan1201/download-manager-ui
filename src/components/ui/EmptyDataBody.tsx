"use client"

import React from 'react';

interface EmptyDataBodyProps {
  tableWidth: number;
}

const EmptyDataBody: React.FC<EmptyDataBodyProps> = ({ tableWidth }) => (
  <tr>
    <td colSpan={tableWidth} style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span style={{ marginTop: 8 }}>No Data Returned</span>
      </div>
    </td>
  </tr>
);

export default EmptyDataBody;