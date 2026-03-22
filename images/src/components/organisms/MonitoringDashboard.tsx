import React from 'react';
import ProgressBar from '../atoms/ProgressBar';
import { JobStatus } from '../../models/JobStatus';
interface Props { status: JobStatus; }
const MonitoringDashboard: React.FC<Props> = ({ status }) => (
  <section className="MonitoringDashboard">
    <p>Stage: {status.stage}</p>
    <ProgressBar value={status.progress} />
    {status.warnings.map((w, i) => <p key={i}>{w}</p>)}
  </section>
);
export default MonitoringDashboard;
