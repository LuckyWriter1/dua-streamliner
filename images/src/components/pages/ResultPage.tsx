import React from 'react';
import ResultDisplaySection from '../organisms/ResultDisplaySection';
import MainLayout from '../templates/MainLayout';
import { GenerationResult } from '../../models/GenerationResult';
const placeholder: GenerationResult = { jobId: '', dua: { id: '', fields: [], generatedAt: '' } };
const ResultPage: React.FC = () => <MainLayout><ResultDisplaySection result={placeholder} /></MainLayout>;
export default ResultPage;
