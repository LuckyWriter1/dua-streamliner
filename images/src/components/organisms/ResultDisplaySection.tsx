import React from 'react';
import StatusBadge from '../atoms/StatusBadge';
import Button from '../atoms/Button';
import RoleGuard from '../../security/RoleGuard';
import { GenerationResult } from '../../models/GenerationResult';
import { downloadFile } from '../../utils/downloadFile';
interface Props { result: GenerationResult; }
const ResultDisplaySection: React.FC<Props> = ({ result }) => (
  <section className="ResultDisplaySection">
    {result.dua.fields.map(f => (
      <div key={f.key}>
        <span>{f.key}: {f.value}</span>
        <StatusBadge status={f.confidence} label={f.confidence} />
      </div>
    ))}
    <RoleGuard permission="DOWNLOAD_DUA">
      <Button label="Download DUA" onClick={() => result.exportUrl && downloadFile(result.exportUrl, 'DUA.docx')} />
    </RoleGuard>
  </section>
);
export default ResultDisplaySection;
