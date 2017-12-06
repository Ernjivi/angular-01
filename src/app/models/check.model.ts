export interface Check{
  status: boolean;
  dueDate: Date;
  text: string;
  user?: number;
}