export interface Person {
  name: string;
  document: string;
  mrn: string;
  state: string;
  type?: string;
  motive?: string;
  diagnostic?: string;
}

export interface Notification {
  type: string;
  motive: string;
  diagnostic: string;
}
