export interface Endpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  path: string;
  description: string;
  parameters?: Parameter[];
  responses: Response[];
  authentication?: boolean;
}

export interface Parameter {
  name: string;
  type: string;
  required: boolean;
  description: string;
}

export interface Response {
  status: number;
  description: string;
  example: any;
}

export interface Section {
  id: string;
  title: string;
  content: string;
  subsections?: Section[];
}