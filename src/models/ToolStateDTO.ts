import { Tool } from "./ToolDTO";

export interface ToolState {
  tools: Tool[] | [];
  isOnlyTag: boolean;
  openModalAdd: boolean;
  openModalRemove: boolean;
}