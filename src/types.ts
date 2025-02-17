export interface Parameter {
  name: string;
  type: "boolean" | "string" | "number";
  required: boolean;
  description: string;
}

export interface Response {
  status: number;
  description: string;
  example: unknown;
}

export interface Request {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  description: string;
  parameters?: Parameter[];
  responses: Response[];
  authentication?: boolean;
}

export interface Identifier {
  id: string;
  title: string;
}

export interface Endpoint {
  requests: Request[];
}

export interface Section extends Identifier {
  content: string;
  subsections?: Section[];
}

export interface SubSectionType {
  [key: string]: Identifier[];
}
