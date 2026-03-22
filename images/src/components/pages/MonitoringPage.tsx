import React from 'react';
import MonitoringDashboard from '../organisms/MonitoringDashboard';
import MainLayout from '../templates/MainLayout';
import { JobStatus } from '../../models/JobStatus';
const placeholder: JobStatus = { jobId: '', stage: 'idle', progress: 0, warnings: [] };
const MonitoringPage: React.FC = () => <MainLayout><MonitoringDashboard status={placeholder} /></MainLayout>;
export default MonitoringPage;
