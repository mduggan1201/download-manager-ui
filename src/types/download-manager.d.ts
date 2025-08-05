export type DownloadItem = {
  id: string;
  name: string;
  device: string;
  path: string;
  status: FileStatus
  isSelected?: boolean;
}

export type FileStatus = 'available' | 'scheduled'