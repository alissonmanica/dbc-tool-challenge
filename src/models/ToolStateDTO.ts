import { Tool } from "./ToolDTO";

export interface ToolState {
  tools: Tool[] | [];
  toolsSearch: Tool[] | [];
  isOnlyTag: boolean;
  openModalAdd: boolean;
}