"use client"

import React from 'react';

interface ErrorBodyProps {
  tableWidth: number;
  errorMessage?: string;
}

const ErrorBody: React.FC<ErrorBodyProps> = ({ tableWidth, errorMessage }) => (
  <tr>
    <td colSpan={tableWidth} style={{ textAlign: 'center' }}>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        role="alert"
        aria-live="assertive"
      >
        <strong style={{ marginTop: 8 }}>ERROR!</strong>
        <p style={{ marginTop: 8 }}>
          {errorMessage || 'An unexpected error occurred.'}
        </p>
      </div>
    </td>
  </tr>
);

export default ErrorBody;