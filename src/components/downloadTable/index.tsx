"use client";

import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { DownloadItem } from '@/types/download-manager';
import LoadingBody from '@/components/ui/LoadingBody';
import ErrorBody from '@/components/ui/ErrorBody';
import EmptyDataBody from '@/components/ui/EmptyDataBody';
import DownloadTableRow from '@/components/downloadTable/DownloadTableRow';
import { sampleDownloadData } from '@/lib/sampleData';
import styles from './DownloadTable.module.css'
import DownloadTableToolbar from '@/components/downloadTable/DownloadTableToolbar';
import DownloadTableHeader from '@/components/downloadTable/DownloadTableHeader';

interface DownloadTableProps {
  testData?: DownloadItem[];
  testError?: boolean
}

const DownloadTable: React.FC<DownloadTableProps> = ({ testData, testError }) => {
  const [items, setItems] = useState<DownloadItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        if (testError) throw new Error('fail');
        setItems(testData ?? sampleDownloadData);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError('Failed to fetch data');
        setItems([]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [testData, testError])

  const selectAllRef = useRef<HTMLInputElement>(null);
  const availableItems = useMemo(() => items.filter(item => item.status === 'available'), [items]);
  const availableCount = availableItems.length;
  const selectedAvailableItems = useMemo(() => availableItems.filter(item => item.isSelected), [availableItems]);
  const selectedAvailableCount = selectedAvailableItems.length;

  const handleSelect = useCallback((id: string, checked: boolean) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isSelected: checked } : item
      )
    );
  }, []);

  const handleSelectAll = useCallback((checked: boolean) => {
    setItems(prev => {
      const availableItems = prev.filter(item => item.status === 'available');
      const allSelected = availableItems.every(item => item.isSelected);
      return prev.map(item =>
        item.status === 'available'
          ? { ...item, isSelected: allSelected ? false : checked }
          : item
      );
    });
  }, []);

  const handleDownloadSelected = useCallback(() => {
    if (selectedAvailableCount === 0) {
      alert('No files selected for download.');
      return;
    }
    const selectedInfo = selectedAvailableItems.map(item => `• ${item.name} (${item.device})\n  ${item.path}`).join('\n\n');
    alert(`Downloading ${selectedAvailableCount} files:\n\n${selectedInfo}`);
  }, [selectedAvailableItems, selectedAvailableCount]);

  useEffect(() => {
    if (selectAllRef.current) {
      const isIndeterminate = selectedAvailableCount > 0 && selectedAvailableCount < availableCount;
      selectAllRef.current.indeterminate = isIndeterminate;
      selectAllRef.current.setAttribute('data-indeterminate', isIndeterminate ? 'true' : 'false');
    }
  }, [selectedAvailableCount, availableCount]);


  return(
    <div className={styles.tableContainer}>
      <DownloadTableToolbar
        selectedAvailableCount={selectedAvailableCount}
        availableCount={availableCount}
        selectAllRef={selectAllRef}
        onSelectAll={handleSelectAll}
        onDownloadSelected={handleDownloadSelected}
      />
      <table className={styles.table}>
        <DownloadTableHeader />
        <tbody>
        {loading ? (
          <LoadingBody tableWidth={5}/>
        ) : error ? (
          <ErrorBody tableWidth={5} errorMessage={error} />
        ) : items.length === 0 ? (
          <EmptyDataBody tableWidth={5}/>
        ) : (
          items.map((item) => (
          <DownloadTableRow
            item={item}
            key={item.id}
            onSelect={handleSelect}
          />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DownloadTable;