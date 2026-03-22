import React from 'react';
import FileUploader from '../molecules/FileUploader';
import Button from '../atoms/Button';
import RoleGuard from '../../security/RoleGuard';
interface Props { onStart: () => void; }
const GeneratorConfigPanel: React.FC<Props> = ({ onStart }) => (
  <section className="GeneratorConfigPanel">
    <FileUploader label="DUA Template" accept=".docx" onFile={() => {}} />
    <FileUploader label="Source Documents" accept=".pdf,.docx,.xlsx,.jpg,.png" onFile={() => {}} />
    <RoleGuard permission="GENERATE_DUA"><Button label="Start Generation" onClick={onStart} /></RoleGuard>
  </section>
);
export default GeneratorConfigPanel;
