"use client"

import React from 'react';
import { Spinner } from 'react-bootstrap';

interface LoadingProps {
  tableWidth: number;
}

const LoadingBody: React.FC<LoadingProps> = ({ tableWidth }) => (
  <tr>
    <td colSpan={tableWidth} style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Spinner animation="border" role="status" />
        <span style={{ marginTop: 8 }}>Loading...</span>
      </div>
    </td>
  </tr>
);

export default LoadingBody;