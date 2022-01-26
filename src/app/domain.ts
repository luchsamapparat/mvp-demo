export interface Flow {
  id: number;
  name: string;
}

export interface Rule {
  name: string;
  details: string;
}

export interface Page<T> {
  total: number;
  page: number;
  rows: T[]
}
