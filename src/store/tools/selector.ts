import { Tool } from "../../models/ToolDTO";
import { AppState } from "../rootReducer";

const tools = (state: AppState):Tool[] => state.tools.tools;

const isOnlyTag = (state: AppState):boolean => state.tools.isOnlyTag;

const openModalAdd = (state: AppState):boolean => state.tools.openModalAdd;

const openModalRemove = (state: AppState):boolean => state.tools.openModalRemove;


export default { get: tools,isOnlyTag, openModalAdd, openModalRemove, }