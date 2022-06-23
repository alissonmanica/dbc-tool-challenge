import { Tag } from "./TagDTO";

export interface Tool{
  id: string;
  name: string;
  link: string;
  tag: Tag[]
  description: string;
}