// Pattern: Strategy
// Interchangeable validation per file type
export interface FileValidationStrategy {
  validate(file: File): boolean;
  supportedExtensions(): string[];
}

export class PdfValidationStrategy implements FileValidationStrategy {
  validate(file: File): boolean { return file.type === 'application/pdf'; }
  supportedExtensions(): string[] { return ['.pdf']; }
}

export class WordValidationStrategy implements FileValidationStrategy {
  validate(file: File): boolean {
    return ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type);
  }
  supportedExtensions(): string[] { return ['.doc', '.docx']; }
}

export class ExcelValidationStrategy implements FileValidationStrategy {
  validate(file: File): boolean {
    return ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(file.type);
  }
  supportedExtensions(): string[] { return ['.xls', '.xlsx']; }
}

export class ImageValidationStrategy implements FileValidationStrategy {
  validate(file: File): boolean { return file.type.startsWith('image/'); }
  supportedExtensions(): string[] { return ['.jpg', '.jpeg', '.png', '.tiff']; }
}

export class FileValidator {
  constructor(private strategy: FileValidationStrategy) {}
  setStrategy(s: FileValidationStrategy): void { this.strategy = s; }
  validate(file: File): boolean { return this.strategy.validate(file); }
}
