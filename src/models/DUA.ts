export interface DUAField {
  key: string;
  value: string;
  confidence: 'high' | 'medium' | 'low';
}

export interface DUA {
  id: string;
  fields: DUAField[];
  generatedAt: string;
}
