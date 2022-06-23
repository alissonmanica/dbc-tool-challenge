import { Tool } from "../../models/ToolDTO";
import { AppState } from "../rootReducer";

const tools = (state: AppState):Tool[] => state.tools.tools;

const toolsSearch = (state: AppState):Tool[] => state.tools.toolsSearch

const isOnlyTag = (state: AppState):boolean => state.tools.isOnlyTag;

const openModalAdd = (state: AppState):boolean => state.tools.openModalAdd;

export default { get: tools, toolsSearch, isOnlyTag, openModalAdd }