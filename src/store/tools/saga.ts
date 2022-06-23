import { call, CallEffect, PutEffect, put, takeLatest } from "@redux-saga/core/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { Tool } from "../../models/ToolDTO";
import { api } from "../../services/api";
import { toolActions } from "./duck";



const fetchTools = async () => {
  const response = await api.get('/toolsList')
  return response.data
}

const createTool = async (tool: any) => {
  const response = await api.post('/toolsList', tool)
  return response.data
}

function* load(): Generator<CallEffect<Tool[]> | PutEffect, void, Tool[]> {
  try {
    const response = yield call(fetchTools)
    yield put(toolActions.set(response))
  } catch (error) {
    console.log(error)
    // do something
  }
}

function* create(action: PayloadAction) {
  try {
    yield createTool(action.payload)
  } catch (error) {
    console.log(error)
  }
}

export default function* toolSaga(): Generator {
  yield takeLatest(toolActions.loadTools, load)
  yield takeLatest(toolActions.create.type, create)
}