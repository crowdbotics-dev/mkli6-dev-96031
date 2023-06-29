import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_bjhfhf_list = createAsyncThunk(
  "bjhfhfs/api_v1_bjhfhf_list",
  async payload => {
    const response = await apiService.api_v1_bjhfhf_list(payload)
    return response.data
  }
)
export const api_v1_bjhfhf_create = createAsyncThunk(
  "bjhfhfs/api_v1_bjhfhf_create",
  async payload => {
    const response = await apiService.api_v1_bjhfhf_create(payload)
    return response.data
  }
)
export const api_v1_bjhfhf_retrieve = createAsyncThunk(
  "bjhfhfs/api_v1_bjhfhf_retrieve",
  async payload => {
    const response = await apiService.api_v1_bjhfhf_retrieve(payload)
    return response.data
  }
)
export const api_v1_bjhfhf_update = createAsyncThunk(
  "bjhfhfs/api_v1_bjhfhf_update",
  async payload => {
    const response = await apiService.api_v1_bjhfhf_update(payload)
    return response.data
  }
)
export const api_v1_bjhfhf_partial_update = createAsyncThunk(
  "bjhfhfs/api_v1_bjhfhf_partial_update",
  async payload => {
    const response = await apiService.api_v1_bjhfhf_partial_update(payload)
    return response.data
  }
)
export const api_v1_bjhfhf_destroy = createAsyncThunk(
  "bjhfhfs/api_v1_bjhfhf_destroy",
  async payload => {
    const response = await apiService.api_v1_bjhfhf_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const bjhfhfsSlice = createSlice({
  name: "bjhfhfs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_bjhfhf_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bjhfhf_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_bjhfhf_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bjhfhf_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bjhfhf_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_bjhfhf_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bjhfhf_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bjhfhf_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_bjhfhf_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bjhfhf_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bjhfhf_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bjhfhf_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bjhfhf_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bjhfhf_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bjhfhf_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_bjhfhf_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_bjhfhf_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_bjhfhf_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_bjhfhf_list,
  api_v1_bjhfhf_create,
  api_v1_bjhfhf_retrieve,
  api_v1_bjhfhf_update,
  api_v1_bjhfhf_partial_update,
  api_v1_bjhfhf_destroy,
  slice: bjhfhfsSlice
}
