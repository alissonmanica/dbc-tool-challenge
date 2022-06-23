import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Tool } from '../../models/ToolDTO';
import { ToolState } from '../../models/ToolStateDTO';

export const initialState: ToolState = {
  tools: [],
  isOnlyTag: false,
  openModalAdd: false,
  openModalRemove: false,
};

const toolSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    set: (state, {payload}: PayloadAction<Tool[]>) => ({...state, tools: payload}),
    create: (state, {payload}: PayloadAction<any>) => ({...state, tools: state.tools.concat(payload)}),
    loadTools: state => ({...state}),
    toggleIsOnlyTag: state => ({...state, isOnlyTag: !state.isOnlyTag}),
    toggleOpenModalAdd: state =>  ({...state, openModalAdd: !state.openModalAdd}),
    toggleOpenModalRemove: state =>  ({...state, openModalRemove: !state.openModalRemove}),
  }
})

export const toolActions = toolSlice.actions;
export default toolSlice.reducer;