
export interface RelatedItem {
  id: string;
  title: string;
  category: string;
  type: string;
  date: string;
  preview: string;
}

export interface ProcessDocument {
  id: string;
  name: string;
  origin: string;
  date: string;
  isCurrent?: boolean;
}
