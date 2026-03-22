import React from 'react';
interface Props { label: string; accept: string; onFile: (file: File) => void; }
const FileUploader: React.FC<Props> = ({ label, accept, onFile }) => (
  <div className="FileUploader">
    <label>{label}</label>
    <input type="file" accept={accept} onChange={e => e.target.files?.[0] && onFile(e.target.files[0])} />
  </div>
);
export default FileUploader;
