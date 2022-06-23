import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Tool } from '../../models/ToolDTO';
import { ToolState } from '../../models/ToolStateDTO';

export const initialState: ToolState = {
  tools: [],
  toolsSearch: [],
  isOnlyTag: false,
  openModalAdd: false,
};

const toolSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    set: (state, {payload}: PayloadAction<Tool[]>) => ({...state, tools: payload, toolsSearch: payload}),
    search: (state, {payload}: PayloadAction<Tool[]>) => ({...state, tools: payload}),
    create: (state, {payload}: PayloadAction<any>) => ({...state, tools: state.tools.concat(payload)}),
    remove: (state, {payload}: PayloadAction<any>) => ({...state, tools: state.tools.filter(item => item.id !== payload)}),
    loadTools: state => ({...state}),
    toggleIsOnlyTag: state => ({...state, isOnlyTag: !state.isOnlyTag}),
    toggleOpenModalAdd: state =>  ({...state, openModalAdd: !state.openModalAdd}),
  }
})

export const toolActions = toolSlice.actions;
export default toolSlice.reducer;